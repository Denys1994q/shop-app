import React, {useState} from 'react';
import {Button, TextField, Grid, Box} from '@mui/material';
import BasicNumberTextField from '../inputs/BasicNumberTextField/BasicNumberTextField';

function Counter() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: any): void => {
    console.log(event?.target.value);
    setQuantity(event?.target.value);
  };

  return (
    <Box>
      <BasicNumberTextField
        value={quantity}
        id={''}
        label={''}
        onChange={handleChange}
        error={false}
        min={0}
        max={0}
        endAdornment="Pcs"
        sx={{
          '.MuiOutlinedInput-root': {
            width: '80px',
            borderRadius: '10px',
            background: '#fdfdfd'
          }
        }}
      />
    </Box>
  );
}

export default Counter;
