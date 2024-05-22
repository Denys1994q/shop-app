import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SecondaryTitle from '@components/typography/SecondaryTitle/SecondaryTitle';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import CardPrice from '@components/ProductCard/CardPrice/CardPrice';
import {Box} from '@mui/material';
import ChevronBtn from '@components/btns/ChevronBtn/ChevronBtn';

interface SecondaryProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
}

const SecondaryProductCard = ({image, title, description, price, discount}: SecondaryProductCardProps) => {
  const priceAfterDiscount = discount ? price - (price * discount) / 100 : price;

  return (
    <Card>
      <CardMedia component="img" alt="product image" height="140" image={image} />
      <CardContent>
        <SecondaryTitle text={title} fontSize={15} sx={{marginBottom: 1}} />
        <MainParagraph text={description} />
        <CardActions sx={{p: 0, mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box>
            <CardPrice priceAfterDiscount={priceAfterDiscount} priceBeforeDiscount={discount && price} />
          </Box>
          <ChevronBtn text="Buy now" />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default SecondaryProductCard;
