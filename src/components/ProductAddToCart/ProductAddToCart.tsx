import {Box} from '@mui/material';
import CardPrice from '../ProductCard/CardPrice/CardPrice';
import ChevronBtn from '../btns/ChevronBtn/ChevronBtn';

const ProductAddToCart = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box>
        <CardPrice fontSize={26} priceAfterDiscount={50} priceBeforeDiscount={100} />
      </Box>
      <Box>
        <ChevronBtn text="Add to cart" />
      </Box>
    </Box>
  );
};

export default ProductAddToCart;
