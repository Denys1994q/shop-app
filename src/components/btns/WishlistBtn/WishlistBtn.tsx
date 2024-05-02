import {Button} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
const WishListBtn = () => {
  return (
    <Button sx={btnStyles} startIcon={<FavoriteBorderIcon />}>
      Add to wishlist
    </Button>
  );
};

export default WishListBtn;
