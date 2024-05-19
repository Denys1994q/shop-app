import {CSSProperties, useRef} from 'react';
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
<<<<<<< HEAD
import {useDebounce} from '@/hooks/useDebounce';
=======
>>>>>>> main

interface BasicSliderProps {
  title: string;
  ariaLabel?: string;
  onChange: (values: number[]) => void;
  value: number[];
  sx?: CSSProperties;
}

<<<<<<< HEAD
const styles = {
=======
const sliderStyles = {
>>>>>>> main
  '& .MuiSlider-thumb': {
    color: '#fff'
  },
  '& .MuiSlider-track': {
    color: '#6A983C'
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#D1D1D1'
  }
};

<<<<<<< HEAD
const BasicSlider = ({title, value, onChange, sx = styles as CSSProperties}: BasicSliderProps) => {
=======
const BasicSlider = ({title, value, onChange, sx = sliderStyles as CSSProperties}: BasicSliderProps) => {
>>>>>>> main
  const minValue = useRef(value[0]);
  const maxValue = useRef(value[1]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
<<<<<<< HEAD
    console.log('handle change');
=======
>>>>>>> main
    if (Array.isArray(newValue)) {
      onChange([newValue[0], newValue[1]]);
    }
  };

<<<<<<< HEAD
  // const debouncedValue = useDebounce(handleChange, 2500);
  // console.log(debouncedValue);

  return (
    <Box>
      <SecondaryTitle text={title} sx={{marginBottom: 2}} />
      <Slider
        sx={{...sx}}
=======
  return (
    <Box>
      <SecondaryTitle text={title} sx={{marginBottom: 1}} />
      <Slider
        sx={sx}
>>>>>>> main
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minValue.current}
        max={maxValue.current}
      />
    </Box>
  );
};

export default BasicSlider;
