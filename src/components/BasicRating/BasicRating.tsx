import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {RatingEnum} from '@/models/rating.enum';
import {CSSProperties} from 'react';

interface BasicRatingProps {
  rating: RatingEnum;
  sx?: CSSProperties;
}

const BasicRating = ({rating, sx}: BasicRatingProps) => {
  return (
    <Rating
      name="customized-icons"
      defaultValue={rating}
      readOnly
      sx={{...sx}}
      icon={<StarIcon fontSize="inherit" />}
    />
  );
};

export default BasicRating;
