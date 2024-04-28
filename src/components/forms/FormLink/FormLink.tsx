import './FormLink.sass';
import {Typography} from '@mui/material';

interface FormLinkProps {
  text: string;
  to: string;
  onClick: () => void;
}

const FormLink = ({onClick, text, to}: FormLinkProps) => {
  return (
    <Typography sx={{mt: 2}}>
      {text}{' '}
      <Typography component="span" className="form-item" onClick={onClick}>
        {to}.
      </Typography>
    </Typography>
  );
};

export default FormLink;
