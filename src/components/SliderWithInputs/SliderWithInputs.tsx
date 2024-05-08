import {useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicSlider from '../BasicSlider/BasicSlider';

interface SliderWithInputsProps {
  title: string;
  onChange: (values: number[]) => void;
  value: number[];
}

const styles = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1};

const SliderWithInputs = ({title, value, onChange}: SliderWithInputsProps) => {
  const min = useRef(value[0]);
  const max = useRef(value[1]);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (+event.target.value < value[1]) {
      onChange([+event.target.value, value[1]]);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (+event.target.value > max.current) {
      return;
    }
    onChange([value[0], +event.target.value]);
  };

  const handleChange = (values: number[]): void => {
    onChange([values[0], values[1]]);
  };

  return (
    <>
      <BasicSlider title={title} value={value} onChange={handleChange} />
      <Box sx={styles}>
        <TextField
          InputProps={{inputProps: {min: min.current, max: max.current, step: '1'}}}
          sx={{width: '40%', backgroundColor: '#F9F9F9'}}
          error={value[1] <= value[0]}
          id="min-input"
          label="Min"
          value={Number(value[0]).toString()}
          onChange={handleMinInputChange}
          type="number"
          InputLabelProps={{shrink: true}}
        />
        <span>-</span>
        <TextField
          sx={{width: '40%', backgroundColor: '#F9F9F9'}}
          error={value[1] <= value[0]}
          id="max-input"
          label="Max"
          value={Number(value[1]).toString()}
          onChange={handleMaxInputChange}
          type="number"
          InputLabelProps={{shrink: true}}
        />
      </Box>
    </>
  );
};

export default SliderWithInputs;
