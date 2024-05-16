import {truncateText} from '@services/truncateText.service';
import {Typography} from '@mui/material';
import {mainTitleLength} from '@/constants/typography.constant';
import {CSSProperties} from 'react';

interface MainTitleProps {
  text: string;
  sx?: CSSProperties;
}

const MainTitle = ({text, sx}: MainTitleProps) => {
  return (
    <Typography variant="h1" sx={{fontSize: 32, fontWeight: 'bold', ...sx}}>
      {truncateText(text, 200)}
    </Typography>
  );
};

export default MainTitle;
