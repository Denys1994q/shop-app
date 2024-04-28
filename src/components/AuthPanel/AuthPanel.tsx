import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import SignInForm from '@/components/forms/SignInForm/SignInForm';
import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openModal, setModalContent} from '@/store/slices/dialog/dialog.slice';
import {SignUpSchemaType} from '@/constants/signUp.validation';
import {registerUser, getUser, loginUser, logoutUser} from '@/store/slices/auth/auth.thunks';
import {User} from '@/store/slices/auth/auth.model';
import {SignInSchemaType} from '@/constants/signIn.validation';

const menuItems = ['Profile', 'Logout'];

const AuthPanel = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);
  const user: User | null = useAppSelector((store) => store.authSlice.user);

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
      dispatch(openModal(false));
      dispatch(getUser());
    }
  };

  const handleSignInFormSubmit = async (signInForm: SignInSchemaType): Promise<void> => {
    const result = await dispatch(loginUser(signInForm)).unwrap();
    if (!result.error) {
      dispatch(openModal(false));
      dispatch(getUser());
    }
  };

  const handleOpenSignUpModal = (): void => {
    dispatch(openModal(true));
    dispatch(setModalContent(signUpForm));
  };

  const handleOpenSignInModal = (): void => {
    dispatch(openModal(true));
    dispatch(setModalContent(signInForm));
  };

  const signUpForm = <SignUpForm onSignInClick={handleOpenSignInModal} onFormSubmit={handleSignUpFormSumbit} />;
  const signInForm = <SignInForm onSignUpClick={handleOpenSignUpModal} onFormSubmit={handleSignInFormSubmit} />;

  const handleMenuItemClick = (menuItem: string): void => {
    if (menuItem === 'Logout') {
      dispatch(logoutUser());
    }
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

  return (
    <div>
      {user ? userBtn : loginBtn}
      <UserMenu
        menuItems={menuItems}
        anchorEl={anchorEl}
        open={openUserMenu}
        handleClose={handleCloseUserMenu}
        onMenuItemClick={handleMenuItemClick}
      />
    </div>
  );
};

export default AuthPanel;
