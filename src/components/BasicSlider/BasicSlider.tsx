import {useRef} from 'react';
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';

interface BasicSliderProps {
  title: string;
  ariaLabel?: string;
  onChange: (values: number[]) => void;
  value: number[];
}

const styles = {
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

const BasicSlider = ({title, value, onChange}: BasicSliderProps) => {
  const minValue = useRef(value[0]);
  const maxValue = useRef(value[1]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    if (Array.isArray(newValue)) {
      onChange([newValue[0], newValue[1]]);
    }
  };

  return (
    <Box>
      <SecondaryTitle text={title} sx={{marginBottom: 1}} />
      <Slider
        sx={styles}
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
