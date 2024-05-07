import './CardPrice.sass';
import {Typography} from '@mui/material';
import {CURRENCY} from '@constants/currency.constant';

interface CardPriceProps {
  priceAfterDiscount: number;
  priceBeforeDiscount?: number;
}

const CardPrice = ({priceAfterDiscount, priceBeforeDiscount}: CardPriceProps) => {
  return (
    <>
      <Typography variant="body1" fontSize={18} sx={{fontWeight: 'bold'}}>
        {priceAfterDiscount} {CURRENCY}
      </Typography>
      {priceBeforeDiscount && (
        <Typography variant="body1" sx={{textDecoration: 'line-through'}} className="oldPrice">
          {priceBeforeDiscount} {CURRENCY}
        </Typography>
      )}
    </>
  );
};

export default CardPrice;
