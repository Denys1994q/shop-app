import {Box} from '@mui/material';
import CardPrice from '../ProductCard/CardPrice/CardPrice';
import ChevronBtn from '../btns/ChevronBtn/ChevronBtn';

const ProductAddToCart = ({priceAfterDiscount, priceBeforeDiscount}: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '20px',
        border: '1px solid #F5F5F5',
        padding: '20px'
      }}
    >
      <Box>
        <CardPrice fontSize={26} priceAfterDiscount={priceAfterDiscount} priceBeforeDiscount={priceBeforeDiscount} />
      </Box>
      <Box>
        <ChevronBtn text="Add to cart" />
      </Box>
    </Box>
  );
};

export default ProductAddToCart;
