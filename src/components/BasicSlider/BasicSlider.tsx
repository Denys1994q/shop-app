import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';

function valuetext(value: number) {
  return `${value}°C`;
}

const BasicSlider = () => {
  const [minValue, setMinValue] = useState<number>(20);
  const [maxValue, setMaxValue] = useState<number>(40);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMaxValue(parseInt(event.target.value));
  };

  const handleChange = (event: Event, newValue: number | number[]): void => {
    if (Array.isArray(newValue)) {
      setMinValue(newValue[0] as number);
      setMaxValue(newValue[1] as number);
      console.log(newValue);
    }
  };

  return (
    <Box sx={{width: 300}}>
      <SecondaryTitle text="Price" />
      <Slider
        sx={{
          '& .MuiSlider-thumb': {
            color: '#fff'
          },
          '& .MuiSlider-track': {
            color: '#6A983C'
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#D1D1D1'
          }
        }}
        getAriaLabel={() => 'Temperature range'}
        value={[minValue, maxValue]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 1}}>
        <TextField
          sx={{width: 110, backgroundColor: '#F9F9F9'}}
          id="min-input"
          label="Min"
          value={minValue}
          onChange={handleMinInputChange}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          sx={{width: 110}}
          id="max-input"
          label="Max"
          value={maxValue}
          onChange={handleMaxInputChange}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </Box>
    </Box>
  );
};

export default BasicSlider;
