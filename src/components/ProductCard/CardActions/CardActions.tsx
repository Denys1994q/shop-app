import ChevronBtn from '@components/btns/ChevronBtn/ChevronBtn';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import {CardActions as MuiCardActions} from '@mui/material';
import {Link} from 'react-router-dom';

const actionsStyles = {
  mt: 2,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: 2
};

const CardActions = () => {
  return (
    <MuiCardActions sx={actionsStyles}>
      <Link to="/products/kek">
        <ChevronBtn text="Product Detail" />
      </Link>
      <WishListBtn />
    </MuiCardActions>
  );
};

export default CardActions;
