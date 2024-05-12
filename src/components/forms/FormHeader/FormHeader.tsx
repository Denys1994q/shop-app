import './FormHeader.sass';
import {Typography} from '@mui/material';

interface FormHeaderProps {
  title: string;
}

const FormHeader = ({title}: FormHeaderProps) => {
  return (
    <Typography className="form-title" fontSize={20} sx={{mb: 2}}>
      {title}
    </Typography>
  );
};

export default FormHeader;
