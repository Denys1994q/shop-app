import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import {useState} from 'react';
import BasicDialog from '@/components/BasicDialog/BasicDialog';
import SignInForm from '@/components/forms/SignInForm/SignInForm';
import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';
import {ModalType} from '@/models/dialog.enum';

interface AuthBtnProps {
  isAuthenticated?: boolean;
}

const menuItems = ['Profile', 'Logout'];

const AuthBtn: React.FC<AuthBtnProps> = ({isAuthenticated = false}) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);
  const dialogType = useAppSelector((store) => store.dialogSlice.dialogType);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorEl(null);
  };

  const handleOpenModal = (modalType: ModalType): void => {
    dispatch(openModal(modalType));
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
    <IconButton aria-label="login-icon" onClick={() => handleOpenModal(ModalType.SignIn)}>
      <LoginIcon fontSize="large" />
    </IconButton>
  );

  return (
    <div>
      {isAuthenticated ? userBtn : loginBtn}
      <UserMenu menuItems={menuItems} anchorEl={anchorEl} open={openUserMenu} handleClose={handleCloseUserMenu} />
      {dialogType !== null && (
        <BasicDialog
          title={dialogType === ModalType.SignIn ? 'Sign in' : 'Registration'}
          open={dialogType !== null}
          onClose={handleCloseModal}
        >
          {dialogType === ModalType.SignIn ? (
            <SignInForm onSignUpClick={() => handleOpenModal(ModalType.SignUp)} />
          ) : (
            <SignUpForm />
          )}
        </BasicDialog>
      )}
    </div>
  );
};

export default AuthBtn;
