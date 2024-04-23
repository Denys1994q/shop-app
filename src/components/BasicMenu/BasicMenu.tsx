import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MenuProps} from '@mui/material/Menu';

interface BasicMenuProps extends MenuProps {
  handleClose: () => void;
  menuItems: string[];
}

const BasicMenu: React.FC<BasicMenuProps> = ({anchorEl, menuItems, open, handleClose}) => {
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

export default BasicMenu;
