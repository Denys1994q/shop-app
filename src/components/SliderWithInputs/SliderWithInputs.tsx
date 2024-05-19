import {useRef} from 'react';
import Box from '@mui/material/Box';
import BasicSlider from '../BasicSlider/BasicSlider';
import BasicNumberTextField from '../inputs/BasicNumberTextField/BasicNumberTextField';
import {FieldError} from 'react-hook-form';

interface SliderWithInputsProps {
  title: string;
  onChange: (values: number[]) => void;
  value: number[];
  error?: FieldError;
}

const styles = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1};

const SliderWithInputs = ({title, value, onChange, error}: SliderWithInputsProps) => {
  const min = useRef(value[0]);
  const max = useRef(value[1]);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = Number(event.target.value);
    if (inputValue < value[1]) {
      onChange([inputValue, value[1]]);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = Number(event.target.value);
    if (inputValue > max.current) {
      return;
    }
    onChange([value[0], inputValue]);
  };

  const handleSliderChange = (values: number[]): void => {
    onChange([values[0], values[1]]);
  };

  return (
    <>
      <BasicSlider title={title} value={value} onChange={handleSliderChange} />
      <Box sx={styles}>
        <BasicNumberTextField
          id="min-input"
          label="Min"
          value={value[0]}
          min={min.current}
          max={max.current}
          onChange={handleMinInputChange}
          error={!!error}
          sx={{width: '40%', backgroundColor: '#F9F9F9'}}
        />
        <span>-</span>
        <BasicNumberTextField
          id="max-input"
          label="Max"
          value={value[1]}
          min={min.current}
          max={max.current}
          onChange={handleMaxInputChange}
          error={!!error}
          sx={{width: '40%', backgroundColor: '#F9F9F9'}}
        />
      </Box>
    </>
  );
};

export default SliderWithInputs;
