import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MenuProps} from '@mui/material/Menu';

interface UserMenuProps extends MenuProps {
  handleClose: () => void;
  menuItems: string[];
}

const UserMenu: React.FC<UserMenuProps> = ({anchorEl, menuItems, open, handleClose}) => {
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
        <MenuItem key={menuItem} onClick={handleClose}>
          {menuItem}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
