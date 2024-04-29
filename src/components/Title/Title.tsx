import {Typography} from '@mui/material';

interface TitleProps {
  text: string;
}

const Title = ({text}: TitleProps) => {
  return (
    <Typography variant="h1" sx={{fontSize: 32, fontWeight: 'bold'}}>
      {text}
    </Typography>
  );
};

export default Title;
