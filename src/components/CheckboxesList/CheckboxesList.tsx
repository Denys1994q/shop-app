import Box from '@mui/material/Box';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import BasicCheckbox from '../inputs/BasicCheckbox/BasicCheckbox';

interface CheckboxesListProps {
  title: any;
  items: any;
  value: any;
  onChange: (values: any) => void;
}

const CheckboxesList = ({title, items, value, onChange}: CheckboxesListProps) => {
  const handleCheckboxChange = (itemValue: number, isChecked: boolean): void => {
    const updatedValues = isChecked ? [...value, itemValue] : value.filter((val: number) => val !== itemValue);
    onChange(updatedValues);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <SecondaryTitle text={title} sx={{marginBottom: 2}} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '400px',
          overflow: 'hidden',
          '&:hover': {
            overflowY: 'auto'
          }
        }}
      >
        {items.map((item: any) => (
          <BasicCheckbox
            key={item.value}
            label={item.label}
            value={item.value}
            checked={value.includes(item.value)}
            onChange={(e: any) => handleCheckboxChange(item.value, e.target.checked)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CheckboxesList;
