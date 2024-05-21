import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MenuProps} from '@mui/material/Menu';
import {UserMenuOptions} from '@/models/userMenuOptions.enum';

interface UserMenuProps extends MenuProps {
  handleClose: () => void;
  onMenuItemClick: (menuItem: UserMenuOptions) => void;
}

const UserMenu = ({anchorEl, open, handleClose, onMenuItemClick}: UserMenuProps) => {
  const handleMenuItemClick = (menuItem: UserMenuOptions): void => {
    onMenuItemClick(menuItem);
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      sx={{
        '& .MuiPaper-root': {
          left: '1130px !important'
        }
      }}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      {Object.values(UserMenuOptions).map((menuItem) => (
        <MenuItem key={menuItem} onClick={() => handleMenuItemClick(menuItem)}>
          {menuItem}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
