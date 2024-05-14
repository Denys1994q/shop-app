import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openDialog} from '@/store/slices/dialog/dialog.slice';
import {logoutUser} from '@/store/slices/auth/auth.thunks';
import {User} from '@/store/slices/auth/auth.model';
import AuthForm from '@/components/forms/AuthForm/AuthForm';
import {UserMenuOptions} from '@/models/userMenuOptions.enum';
import {openToast} from '@/store/slices/toast/toast.slice';
import {SuccessToastMessages} from '@/constants/toastMessages.constant';
import {ToastEnum} from '@/models/toast.enum';

const AuthBtn = () => {
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

  const handleOpenSignInModal = (): void => {
    dispatch(openDialog(<AuthForm />));
  };

  const handleMenuItemClick = async (menuItem: UserMenuOptions): Promise<void> => {
    switch (menuItem) {
      case UserMenuOptions.LOGOUT:
        await handleLogout();
        break;
      case UserMenuOptions.PROFILE:
        handleOpenProfile();
        break;
      default:
        break;
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(openToast({message: SuccessToastMessages.LOGGED_OUT, type: ToastEnum.SUCCESS}));
    } catch (error) {
      dispatch(openToast({message: error as string, type: ToastEnum.ERROR}));
    }
  };

  const handleOpenProfile = (): void => {};

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
        anchorEl={anchorEl}
        open={openUserMenu}
        handleClose={handleCloseUserMenu}
        onMenuItemClick={handleMenuItemClick}
      />
    </div>
  );
};

export default AuthBtn;
