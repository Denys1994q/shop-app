import DetailesBtn from '@components/btns/DetailesBtn/DetailesBtn';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import {CardActions as MuiCardActions} from '@mui/material';

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
      <DetailesBtn />
      <WishListBtn />
    </MuiCardActions>
  );
};

export default CardActions;
