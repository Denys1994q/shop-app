import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {IconButton, InputAdornment} from '@mui/material';

interface PasswordAdornmentProps {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PasswordAdornment: React.FC<PasswordAdornmentProps> = ({showPassword, handleClickShowPassword, handleMouseDownPassword}) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordAdornment;
