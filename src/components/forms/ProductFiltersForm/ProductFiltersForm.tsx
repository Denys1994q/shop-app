import {useEffect} from 'react';
import SliderWithInputs from '../../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {productFiltersSchema} from '@constants/productFilters.validation';

const ProductFiltersForm = () => {
  const {
    control,
    watch,
    formState: {errors}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productFiltersSchema),
    defaultValues: {
      priceRange: [1, 100]
    }
  });

  const priceRange = watch('priceRange');

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  return (
    <form>
      <Controller
        name="priceRange"
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <SliderWithInputs title="Price" onChange={onChange} value={value} error={error} />
        )}
      />
    </form>
  );
};

export default ProductFiltersForm;
