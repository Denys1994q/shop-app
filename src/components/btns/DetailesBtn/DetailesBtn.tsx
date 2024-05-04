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

const DetailesBtn = () => {
  return (
    <Button sx={btnStyles} endIcon={<ChevronRightIcon />}>
      Product Detail
    </Button>
  );
};

export default DetailesBtn;
