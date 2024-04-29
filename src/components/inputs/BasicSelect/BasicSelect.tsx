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
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <Select size="small" value={value} label={label} onChange={handleChange} sx={{fontSize: 14}}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{fontSize: 12}}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
