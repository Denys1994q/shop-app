import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {RatingEnum} from '@/models/rating.enum';

interface BasicRatingProps {
  rating: RatingEnum;
}

const BasicRating = ({rating}: BasicRatingProps) => {
  return (
    <Rating
      name="customized-icons"
      defaultValue={rating}
      getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
      precision={0.5}
      icon={<StarIcon fontSize="inherit" />}
    />
  );
};

export default BasicRating;
