import {Typography} from '@mui/material';
import {truncateText} from '@services/truncateText.service';
import {paragraphLength} from '@/constants/typography.constant';
import {CSSProperties} from 'react';

interface MainParagraphProps {
  text: string;
  sx?: CSSProperties;
  maxLength?: number;
}

const MainParagraph = ({text, sx, maxLength}: MainParagraphProps) => {
  const truncatedLength = maxLength || paragraphLength;

  return (
    <Typography variant="body2" color="#575757" fontSize={12} sx={{...sx}}>
      {truncateText(text, truncatedLength)}
    </Typography>
  );
};

export default MainParagraph;
