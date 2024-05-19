import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Total from '@components/Total/Total';
import {Box} from '@mui/material';

interface BasicCheckboxProps {
  label: string;
  value: any;
  checked?: any;
  onChange: (e: any) => void;
  amount: number;
}

const BasicCheckbox = ({label, checked, value, amount, onChange}: BasicCheckboxProps) => {
  const setLabel = (label: any, amount: any): any => {
    return (
      <Box sx={{width: '235px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span> {label}</span>
        {amount ? <Total value={amount} /> : null}
      </Box>
    );
  };

  return (
    <>
      <FormControlLabel
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
        control={
          <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 22}}} checked={checked} value={value} onChange={onChange} />
        }
        label={setLabel(label, amount)}
      />
    </>
  );
};

export default BasicCheckbox;
