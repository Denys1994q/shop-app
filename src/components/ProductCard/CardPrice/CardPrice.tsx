import './CardPrice.sass';
import {Typography} from '@mui/material';

interface CardPriceProps {
  priceAfterDiscount: number;
  priceBeforeDiscount?: number;
}

const CardPrice = ({priceAfterDiscount, priceBeforeDiscount}: CardPriceProps) => {
  return (
    <>
      <Typography variant="body1" fontSize={18} sx={{fontWeight: 'bold'}}>
        {priceAfterDiscount} USD
      </Typography>
      {priceBeforeDiscount && (
        <Typography variant="body1" sx={{textDecoration: 'line-through'}} className="oldPrice">
          {priceBeforeDiscount} USD
        </Typography>
      )}
    </>
  );
};

export default CardPrice;
