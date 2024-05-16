import {Typography} from '@mui/material';
import {truncateText} from '@services/truncateText.service';
import {paragraphLength} from '@/constants/typography.constant';

interface MainParagraphProps {
  text: string;
  sx?: any;
  lineClamp?: number;
}

const MainParagraph = ({text, sx, lineClamp = 2}: MainParagraphProps) => {
  return (
    <Typography
      variant="body2"
      color="#575757"
      fontSize={12}
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        ...sx
      }}
    >
      {text}
    </Typography>
  );
};

export default MainParagraph;
