import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ChangeEvent} from 'react';

interface BasicCheckboxProps {
  label: string;
  value: number;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const BasicCheckbox = ({label, checked, value, onChange}: BasicCheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 22}}} checked={checked} value={value} onChange={onChange} />
      }
      label={label}
    />
  );
};

export default BasicCheckbox;
