import {FC, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import BasicDialog from '@/components/BasicDialog/BasicDialog';
import SignInForm from '@/components/forms/SignInForm/SignInForm';
import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';
import {ModalType} from '@/models/dialog.enum';
import {SignUpSchemaType} from '@/constants/signUp.validation';
import {registerUser, getUser, loginUser} from '@/store/slices/auth/auth.thunks';
import {resetError} from '@/store/slices/auth/auth.slice';
import {User} from '@/store/slices/auth/auth.model';
import {SignInSchemaType} from '@/constants/signIn.validation';

const menuItems = ['Profile', 'Logout'];

const AuthPanel: FC = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);
  const dialogType = useAppSelector((store) => store.dialogSlice.dialogType);
  const userError: string | null = useAppSelector((store) => store.authSlice.error);
  const user: User | null = useAppSelector((store) => store.authSlice.user);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorEl(null);
  };

  const handleOpenModal = (modalType: ModalType): void => {
    dispatch(openModal(modalType));
    dispatch(resetError());
  };

  const handleCloseModal = (): void => {
    dispatch(openModal(null));
    dispatch(resetError());
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
    <IconButton aria-label="login-icon" onClick={() => handleOpenModal(ModalType.SignIn)}>
      <LoginIcon fontSize="large" />
    </IconButton>
  );

  const handleSignUpFormSumbit = async (data: SignUpSchemaType): Promise<void> => {
    const {confirmPassword, ...userData} = data;
    const result: any = await dispatch(registerUser(userData));
    if (!result.error) {
      handleCloseModal();
    }
    dispatch(getUser());
  };

  const handleSignInFormSubmit = async (data: SignInSchemaType): Promise<void> => {
    const result: any = await dispatch(loginUser(data));
    if (!result.error) {
      handleCloseModal();
    }
    dispatch(getUser());
  };

  return (
    <div>
      {user ? userBtn : loginBtn}
      <UserMenu menuItems={menuItems} anchorEl={anchorEl} open={openUserMenu} handleClose={handleCloseUserMenu} />
      {dialogType !== null && (
        <BasicDialog
          title={dialogType === ModalType.SignIn ? 'Sign in' : 'Registration'}
          open={dialogType !== null}
          onClose={handleCloseModal}
        >
          {dialogType === ModalType.SignIn ? (
            <SignInForm
              onSignUpClick={() => handleOpenModal(ModalType.SignUp)}
              onFormSubmit={handleSignInFormSubmit}
              error={userError}
            />
          ) : (
            <SignUpForm onFormSubmit={handleSignUpFormSumbit} error={userError} />
          )}
        </BasicDialog>
      )}
    </div>
  );
};

export default AuthPanel;
