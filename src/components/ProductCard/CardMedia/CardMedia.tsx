import {CardMedia as MuiCardMedia} from '@mui/material';

interface CardMediaProps {
  imageUrl: string;
  width: number;
  height: number;
}

const CardMedia = ({imageUrl, width, height}: CardMediaProps) => {
  return (
    <MuiCardMedia
      component="img"
      sx={{width: {width}, height: {height}, objectFit: 'contain'}}
      image={imageUrl}
      title="product image"
    />
  );
};

export default CardMedia;
