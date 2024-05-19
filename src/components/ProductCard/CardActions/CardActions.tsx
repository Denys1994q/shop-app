import ChevronBtn from '@components/btns/ChevronBtn/ChevronBtn';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import {CardActions as MuiCardActions} from '@mui/material';
import {Link} from 'react-router-dom';
import {routes} from '@constants/routes';
import {Product} from '@/store/slices/products/products.model';

const actionsStyles = {
  mt: 2,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: 2
};

const CardActions = ({product}: {product: Product}) => {
  return (
    <MuiCardActions sx={actionsStyles}>
      <Link to={`/${routes.products}/${product._id}`}>
        <ChevronBtn text="Product Detail" />
      </Link>
      <WishListBtn product={product} />
    </MuiCardActions>
  );
};

export default CardActions;
