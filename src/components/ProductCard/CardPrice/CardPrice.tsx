import './CardPrice.sass';
import {Typography} from '@mui/material';
import {CURRENCY} from '@constants/currency.constant';

interface CardPriceProps {
  priceAfterDiscount: number;
  priceBeforeDiscount?: number;
  fontSize?: number;
}

const CardPrice = ({priceAfterDiscount, priceBeforeDiscount, fontSize = 18}: CardPriceProps) => {
  return (
    <>
<<<<<<< HEAD
      <Typography variant="body1" fontSize={fontSize} sx={{fontWeight: 'bold'}}>
        {priceAfterDiscount} {CURRENCY}
      </Typography>
      {priceBeforeDiscount && (
        <Typography variant="body1" fontSize={12} sx={{textDecoration: 'line-through'}} className="oldPrice">
=======
      <Typography variant="body1" fontSize={18} sx={{fontWeight: 'bold'}}>
        {priceAfterDiscount} {CURRENCY}
      </Typography>
      {priceBeforeDiscount && (
        <Typography variant="body1" sx={{textDecoration: 'line-through'}} className="oldPrice">
>>>>>>> main
          {priceBeforeDiscount} {CURRENCY}
        </Typography>
      )}
    </>
  );
};

export default CardPrice;
