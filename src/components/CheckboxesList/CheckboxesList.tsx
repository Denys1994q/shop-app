import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import BasicCheckbox from '../inputs/BasicCheckbox/BasicCheckbox';

const CheckboxesList = ({items, value, onChange}: any) => {
  //   console.log(value);
  const handleCheckboxChange = (itemValue: number, isChecked: boolean) => {
    const updatedValues = isChecked ? [...value, itemValue] : value.filter((val: number) => val !== itemValue);
    onChange(updatedValues);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <SecondaryTitle text="Categories" sx={{marginBottom: 2}} />
      {items.map((item: any) => (
        <BasicCheckbox
          key={item.value}
          label={item.label}
          value={item.value}
          onChange={(e: any) => handleCheckboxChange(item.value, e.target.checked)}
          //   onChange={(e) => onChange({status: e.target.checked, label: item.label})}
        />
      ))}
    </Box>
  );
};

export default CheckboxesList;
