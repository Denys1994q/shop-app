import {Box, Card} from '@mui/material';
import CardMedia from './CardMedia/CardMedia';
import CardContent from './CardContent/CardContent';
import CardPrice from './CardPrice/CardPrice';
import CardActions from './CardActions/CardActions';
import {Product} from '@/store/slices/products/products.model';

interface ProductCardProps {
  product: Product;
}

const cardStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '10px'
};

const cardBoxStyles = {
  width: '33%',
  padding: 3,
  display: 'flex'
};

const actionsBoxStyles = {
  width: '33%',
  padding: 3,
  display: 'flex',
  flexDirection: 'column'
};

const ProductCard = ({product}: ProductCardProps) => {
  const {images, title, description, rating, state, seller, price, discount} = product;
  const priceWithDiscount = discount ? price - (price * discount) / 100 : price;

  return (
    <Card sx={cardStyles}>
      <CardMedia imageUrl={images[0]} width={270} height={270} />
      <Box sx={cardBoxStyles}>
        <CardContent title={title} description={description} rating={rating || 0} state={state} seller={seller} />
      </Box>
      <Box sx={actionsBoxStyles}>
        <CardPrice priceAfterDiscount={priceWithDiscount} priceBeforeDiscount={discount && price} />
        <CardActions />
      </Box>
    </Card>
  );
};

export default ProductCard;
