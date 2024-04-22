import TextField from '@mui/material/TextField';
import {HTMLInputTypeAttribute, useState} from 'react';
import {Control, Controller, FieldError, FieldValues, Path, RegisterOptions} from 'react-hook-form';
import PasswordAdornment from '../PasswordAdornment/PasswordAdornment';

interface FormInputControllerProps<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<FieldsType>;
}

interface Props<FieldsType extends FieldValues> extends FormInputControllerProps<FieldsType> {
  label?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

const BasicTextField = <FieldsType extends FieldValues>({name, control, type = 'text', label, rules, className}: Props<FieldsType>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const setType = (): string => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    } else {
      return type;
    }
  };

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}, fieldState: {error}, formState}) => (
          <TextField
            helperText={error?.message}
            size="small"
            type={setType()}
            error={!!error}
            onChange={onChange}
            value={value || ''}
            fullWidth
            label={label}
            variant="outlined"
            InputProps={
              type === 'password'
                ? {
                    endAdornment: <PasswordAdornment showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} />
                  }
                : {}
            }
          />
        )}
      />
    </div>
  );
};

export default BasicTextField;
