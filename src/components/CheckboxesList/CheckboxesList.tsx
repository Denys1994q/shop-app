import Box from '@mui/material/Box';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import BasicCheckbox from '../inputs/BasicCheckbox/BasicCheckbox';
import {SelectOption} from '@/models/selectOption.interface';

interface CheckboxesListProps {
  title: string;
  items: SelectOption[];
  value: number[];
  onChange: (values: number[]) => void;
}

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '400px',
  overflow: 'hidden',
  '&:hover': {
    overflowY: 'auto'
  }
};

const CheckboxesList = ({title, items, value, onChange}: CheckboxesListProps) => {
  const handleCheckboxChange = (itemValue: number, isChecked: boolean): void => {
    const updatedValues = isChecked ? [...value, itemValue] : value.filter((val: number) => val !== itemValue);
    onChange(updatedValues);
  };

  return (
    <>
      <SecondaryTitle text={title} sx={{marginBottom: 2}} />
      <Box sx={boxStyles}>
        {items.map((item) => (
          <BasicCheckbox
            key={item.value}
            label={item.label}
            value={item.value}
            checked={value.includes(item.value)}
            onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
          />
        ))}
      </Box>
    </>
  );
};

export default CheckboxesList;
