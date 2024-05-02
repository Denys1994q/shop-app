import {Typography} from '@mui/material';
import {truncateText} from '@services/truncateText.service';
import {paragraphLength} from '@/constants/typography.constant';

interface MainParagraphProps {
  text: string;
}

const MainParagraph = ({text}: MainParagraphProps) => {
  return (
    <Typography variant="body2" color="#575757" fontSize={12}>
      {truncateText(text, paragraphLength)}
    </Typography>
  );
};

export default MainParagraph;
