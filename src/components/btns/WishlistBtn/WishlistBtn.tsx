import {Button} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {selectUser} from '@store/slices/auth/auth.selectors';
import {useAppSelector, useAppDispatch} from '@/store/hooks';
import {openDialog} from '@/store/slices/dialog/dialog.slice';
import AuthForm from '@/components/forms/AuthForm/AuthForm';
import {addToWishlist, removeFromWishlist} from '@/store/slices/wishlist/wishlist.thunks';
import {Product} from '@store/slices/products/products.model';
import {useSelectWishlist} from '@store/slices/wishlist/wishlist.actions';

const btnStyles = {
  padding: '5px 15px',
  fontSize: '15px',
  textTransform: 'none',
  fontWeight: 'bold',
  background: '#F5F5F5',
  borderRadius: '10px',
  color: '#151515',
  '&:hover': {
    color: '#000',
    background: '#fff'
  }
};

const WishListBtn = ({product}: {product: Product}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const wishlist = useSelectWishlist();
  const isInWishlist = wishlist.findIndex((wishlistProduct) => wishlistProduct._id === product._id) > -1;

  const handleClick = (): void => {
    if (!user) {
      dispatch(openDialog(<AuthForm />));
    }
    setWishlistStatus();
  };

  const setWishlistStatus = (): void => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const icon = isInWishlist ? <FavoriteIcon sx={{color: '#ba000d'}} /> : <FavoriteBorderIcon />;

  return (
    <Button onClick={handleClick} sx={btnStyles} startIcon={icon}>
      Add to wishlist
    </Button>
  );
};

export default WishListBtn;
