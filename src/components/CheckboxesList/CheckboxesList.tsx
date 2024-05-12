import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import BasicCheckbox from '../inputs/BasicCheckbox/BasicCheckbox';

const CheckboxesList = ({title, items, value, onChange}: any) => {
  const handleCheckboxChange = (itemValue: number, isChecked: boolean): void => {
    const updatedValues = isChecked ? [...value, itemValue] : value.filter((val: number) => val !== itemValue);
    onChange(updatedValues);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <SecondaryTitle text={title} sx={{marginBottom: 2}} />
      {items.map((item: any) => (
        <BasicCheckbox
          key={item.value}
          label={item.label}
          value={item.value}
          checked={value.includes(item.value)} // Перевірка, чи міститься значення в масиві value
          onChange={(e: any) => handleCheckboxChange(item.value, e.target.checked)}
        />
      ))}
    </Box>
  );
};

export default CheckboxesList;
