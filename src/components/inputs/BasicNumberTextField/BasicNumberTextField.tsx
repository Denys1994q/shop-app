import {TextField} from '@mui/material';

interface BasicNumberTextFieldProps {
  value: number;
  id: string;
  label: string;
  onChange: any;
  error: boolean;
  sx?: React.CSSProperties;
  min: number;
  max: number;
}

const BasicNumberTextField = ({id, label, value, min, max, onChange, error, sx}: BasicNumberTextFieldProps) => {
  return (
    <TextField
      type="number"
      value={Number(value).toString()}
      onChange={onChange}
      error={error}
      id={id}
      label={label}
      sx={sx}
      InputProps={{inputProps: {min: min, max: max, step: '1'}}}
      InputLabelProps={{shrink: true}}
    />
  );
};

export default BasicNumberTextField;
