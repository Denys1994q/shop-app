import {MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import {SelectChangeEvent} from '@mui/material/Select';
import {SelectOption} from '@/models/selectOption.interface';

interface BasicSelectProps {
  label?: string;
  options: SelectOption[];
  value: number;
  onChange: (value: number, event?: SelectChangeEvent<number>) => void;
}

const BasicSelect = ({label, options, value, onChange}: BasicSelectProps) => {
  const handleChange = (event: SelectChangeEvent<number>): void => {
    onChange(+event.target.value, event);
  };

  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '15px',
          fontSize: 14
        }
      }}
    >
      {label && (
        <InputLabel sx={{fontSize: 14}} id="demo-simple-select-label">
          {label}
        </InputLabel>
      )}
      <Select
        id="demo-simple-select-label"
        size="small"
        labelId="demo-simple-select-label"
        sx={{background: '#fdfdfd'}}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{fontSize: 14}}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
