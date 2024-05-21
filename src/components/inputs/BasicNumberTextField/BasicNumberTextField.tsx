import {InputAdornment, TextField} from '@mui/material';

interface BasicNumberTextFieldProps {
  value: number;
  id: string;
  label: string;
  onChange: any;
  error: boolean;
  sx?: React.CSSProperties;
  min: number;
  max: number;
  endAdornment?: any;
}

const BasicNumberTextField = ({
  id,
  label,
  value,
  min,
  max,
  onChange,
  error,
  sx,
  endAdornment
}: BasicNumberTextFieldProps) => {
  return (
    <TextField
      type="number"
      value={Number(value).toString()}
      onChange={onChange}
      error={error}
      id={id}
      label={label}
      sx={{
        '.MuiOutlinedInput-root': {
          fontSize: 14
        },
        '.MuiInputBase-input': {
          padding: '10px'
        },
        ...sx
      }}
      InputLabelProps={{shrink: true}}
      InputProps={{
        inputProps: {min: min, max: max, step: '1'},
        endAdornment: endAdornment ? (
          <InputAdornment position="end">
            <span style={{fontWeight: 'bold', fontSize: 12}}>{endAdornment}</span>{' '}
          </InputAdornment>
        ) : undefined
      }}
    />
  );
};

export default BasicNumberTextField;
