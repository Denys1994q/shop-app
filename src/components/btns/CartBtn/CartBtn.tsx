import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartBtn: React.FC = () => {
  return (
    <IconButton aria-label="cart-icon">
      <AddShoppingCartIcon fontSize="large" />
    </IconButton>
  );
};

export default CartBtn;
