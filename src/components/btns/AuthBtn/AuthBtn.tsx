import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import UserMenu from '@/components/UserMenu/UserMenu';
import {useState} from 'react';

interface AuthBtnProps {
  isAuthenticated?: boolean;
}

const menuItems = ['Profile', 'Logout'];

const AuthBtn: React.FC<AuthBtnProps> = ({isAuthenticated = false}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const userBtn = (
    <IconButton aria-label="user-icon" onClick={handleClick}>
      <AccountCircleOutlinedIcon
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        fontSize="large"
      />
    </IconButton>
  );

  const loginBtn = (
    <IconButton aria-label="login-icon">
      <LoginIcon fontSize="large" />
    </IconButton>
  );

  return (
    <div>
      {isAuthenticated ? userBtn : loginBtn}
      <UserMenu menuItems={menuItems} anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </div>
  );
};

export default AuthBtn;
