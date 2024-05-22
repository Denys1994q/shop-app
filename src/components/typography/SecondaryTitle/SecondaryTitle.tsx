import {Typography} from '@mui/material';
import {secondaryTitleLength} from '@/constants/typography.constant';
import {truncateText} from '@/services/truncateText.service';

interface SecondaryTitleProps {
  text: string;
  sx?: React.CSSProperties;
  fontSize?: number;
}

const SecondaryTitle = ({text, fontSize = 18, sx}: SecondaryTitleProps) => {
  return (
    <Typography variant="h2" sx={{fontSize: fontSize, fontWeight: 'bold', ...sx}}>
      {truncateText(text, secondaryTitleLength)}
    </Typography>
  );
};

export default SecondaryTitle;
