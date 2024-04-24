import {FC, useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import BasicDialog from '@/components/BasicDialog/BasicDialog';
import SignInForm from '@/components/forms/SignInForm/SignInForm';
import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';
import {SignUpSchemaType} from '@/constants/signUp.validation';
import {registerUser, getUser, loginUser} from '@/store/slices/auth/auth.thunks';
import {resetErrors} from '@/store/slices/auth/auth.slice';
import {User} from '@/store/slices/auth/auth.model';
import {SignInSchemaType} from '@/constants/signIn.validation';
import BasicError from '@/components/BasicError/BasicError';
import {Box} from '@mui/material';

const menuItems = ['Profile', 'Logout'];

const AuthPanel: FC = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);
  const dialogContent = useAppSelector((store) => store.dialogSlice.dialogContent);
  const user: User | null = useAppSelector((store) => store.authSlice.user);
  const signUpError: string | null = useAppSelector((store) => store.authSlice.signUpError);
  const signInError: string | null = useAppSelector((store) => store.authSlice.signInError);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSignUpFormSumbit = async (signUpForm: SignUpSchemaType): Promise<void> => {
    const {confirmPassword, ...userData} = signUpForm;
    const result = await dispatch(registerUser(userData)).unwrap();
    if (!result.error) {
      handleCloseModal();
      dispatch(getUser());
    }
  };

  const handleSignInFormSubmit = async (signInForm: SignInSchemaType): Promise<void> => {
    const result = await dispatch(loginUser(signInForm)).unwrap();
    if (!result.error) {
      handleCloseModal();
      dispatch(getUser());
    }
  };

  const signUpForm = <SignUpForm onFormSubmit={handleSignUpFormSumbit} error={signUpError} />;

  const signInForm = (
    <SignInForm onSignUpClick={() => dispatch(openModal(signUpForm))} onFormSubmit={handleSignInFormSubmit} />
  );

  const handleOpenSignInModal = (): void => {
    dispatch(openModal(signInForm));
  };

  const handleCloseModal = (): void => {
    dispatch(openModal(null));
  };

  const userBtn = (
    <IconButton aria-label="user-icon" onClick={handleOpenUserMenu}>
      <AccountCircleOutlinedIcon
        aria-controls={openUserMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openUserMenu ? 'true' : undefined}
        fontSize="large"
      />
    </IconButton>
  );

  const loginBtn = (
    <IconButton aria-label="login-icon" onClick={handleOpenSignInModal}>
      <LoginIcon fontSize="large" />
    </IconButton>
  );

  useEffect(() => {
    dispatch(resetErrors());
  }, [dialogContent]);

  return (
    <div>
      {user ? userBtn : loginBtn}
      <UserMenu menuItems={menuItems} anchorEl={anchorEl} open={openUserMenu} handleClose={handleCloseUserMenu} />
      {dialogContent !== null && (
        <>
          <BasicDialog open={dialogContent !== null} onClose={handleCloseModal}>
            {dialogContent}
            {signUpError && (
              <Box width={300}>
                <BasicError text={signUpError} />
              </Box>
            )}
            {signInError && (
              <Box width={300}>
                <BasicError text={signInError} />
              </Box>
            )}
          </BasicDialog>
        </>
      )}
    </div>
  );
};

export default AuthPanel;
