import TextField from '@mui/material/TextField';
import {Control, Controller} from 'react-hook-form';

interface BasicTextFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  rules?: Record<string, any>;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({name, control, label, rules}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}, formState}) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value || ''}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default BasicTextField;
