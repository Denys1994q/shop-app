import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {IconButton, InputAdornment} from '@mui/material';
import {FC} from 'react';

interface PasswordAdornmentProps {
  showPassword: boolean;
  handleClickShowPassword: () => void;
}

const PasswordAdornment: FC<PasswordAdornmentProps> = ({showPassword, handleClickShowPassword}) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={handleClickShowPassword} edge="end">
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordAdornment;
