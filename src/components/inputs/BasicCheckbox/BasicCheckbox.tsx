import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface BasicCheckboxProps {
  label: string;
  value: any;
  checked?: any;
  onChange: (e: any) => void;
}

const BasicCheckbox = ({label, checked, value, onChange}: BasicCheckboxProps) => {
  return <FormControlLabel control={<Checkbox value={value} onChange={onChange} />} label={label} />;
};

export default BasicCheckbox;
