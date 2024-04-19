import {Button} from '@mui/material';
import {ButtonProps} from '@mui/material';

interface BasicBtnProps extends ButtonProps {
  text: string;
}

const BasicBtn: React.FC<BasicBtnProps> = ({type, variant = 'contained', text, disabled = false}) => {
  return (
    <Button type={type} disabled={disabled} sx={{fontSize: 14, width: '100%'}} variant={variant} color="success">
      {text}
    </Button>
  );
};

export default BasicBtn;
