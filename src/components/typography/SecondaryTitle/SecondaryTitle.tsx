import {Typography} from '@mui/material';
import {secondaryTitleLength} from '@/constants/typography.constant';
import {truncateText} from '@/services/truncateText.service';

interface SecondaryTitleProps {
  text: string;
  sx?: React.CSSProperties;
}

const SecondaryTitle = ({text, sx}: SecondaryTitleProps) => {
  return (
    <Typography variant="h2" sx={{fontSize: 18, fontWeight: 'bold', ...sx}}>
      {truncateText(text, secondaryTitleLength)}
    </Typography>
  );
};

export default SecondaryTitle;
