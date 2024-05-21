import {Button} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const btnStyles = {
  padding: '5px 15px',
  fontSize: '15px',
  textTransform: 'none',
  fontWeight: 'bold',
  background: '#6A983C',
  border: '2px solid #46760A',
  borderRadius: '10px',
  color: '#fff',
  '&:hover': {
    color: '#000',
    background: '#fff'
  }
};

interface ChevronBtnProps {
  text: string;
  onClick?: any;
  withoutChevron?: any;
}

const ChevronBtn = ({text, onClick, withoutChevron = false}: ChevronBtnProps) => {
  return (
    <Button onClick={onClick} sx={btnStyles} endIcon={!withoutChevron ? <ChevronRightIcon /> : null}>
      {text}
    </Button>
  );
};

export default ChevronBtn;
