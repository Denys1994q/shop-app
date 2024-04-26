import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MenuProps} from '@mui/material/Menu';

interface UserMenuProps extends MenuProps {
  handleClose: () => void;
  menuItems: string[];
  onMenuItemClick: (menuItem: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({anchorEl, menuItems, open, handleClose, onMenuItemClick}) => {
  const handleMenuItemClick = (menuItem: string): void => {
    onMenuItemClick(menuItem);
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem} onClick={() => handleMenuItemClick(menuItem)}>
          {menuItem}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
