import {truncateText} from '@services/truncateText.service';
import {Typography} from '@mui/material';
import {mainTitleLength} from '@/constants/typography.constant';

interface MainTitleProps {
  text: string;
}

const MainTitle = ({text}: MainTitleProps) => {
  return (
    <Typography variant="h1" sx={{fontSize: 32, fontWeight: 'bold'}}>
      {truncateText(text, mainTitleLength)}
    </Typography>
  );
};

export default MainTitle;
