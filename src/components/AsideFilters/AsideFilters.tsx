import {useEffect} from 'react';
import SliderWithInputs from '../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Box} from '@mui/material';

const AsideFilters = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(filtersSchema),
    defaultValues: {
      priceRange: [1, 100]
    }
  });

  const priceRange = watch('priceRange');

  useEffect(() => {
    if (priceRange[0] >= priceRange[1]) {
      return;
    }
    console.log(priceRange);
  }, [priceRange]);

  return (
    <form>
      <Box sx={{width: 300}}>
        <Controller
          name="priceRange"
          control={control}
          render={({field: {onChange, value}}) => <SliderWithInputs title="Price" onChange={onChange} value={value} />}
        />
      </Box>
    </form>
  );
};

export default AsideFilters;
