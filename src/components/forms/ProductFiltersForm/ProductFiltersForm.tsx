import {useEffect} from 'react';
import SliderWithInputs from '../../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {productFiltersSchema} from '@constants/productFilters.validation';
import BasicSlider from '@/components/BasicSlider/BasicSlider';
import {Box} from '@mui/material';
import {CSSProperties} from 'react';
import {useAppDispatch} from '@/store/hooks';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {Filters} from '@/store/slices/filters/filters.model';
import {useSearchParams} from 'react-router-dom';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  ratingSlider: {
    '& .MuiSlider-thumb': {
      color: '#fff'
    },
    '& .MuiSlider-track': {
      color: '#ffc400'
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#D1D1D1'
    }
  }
};

interface ProductFiltersFormProps {
  priceRange: number[];
  ratingRange: number[];
}

const ProductFiltersForm = ({priceRange, ratingRange}: ProductFiltersFormProps) => {
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const {
    control,
    watch,
    formState: {errors}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productFiltersSchema),
    defaultValues: {
      priceRange: priceRange,
      ratingRange: ratingRange
    }
  });

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange} = filters;
    const params: any = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
      maxRating: ratingRange[1]
    };
    setSearchParams(params);
  };

  // перевірка чи поле вже touched або перевірка на наявність помилки
  useEffect(() => {
    const subscription = watch((value: any) => {
      dispatch(updateFilters(value));
      updateSearchParams(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form>
      <Box sx={styles.box}>
        <Box>
          <Controller
            name="priceRange"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <SliderWithInputs title="Price" onChange={onChange} value={value} error={error} />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="ratingRange"
            control={control}
            render={({field: {onChange, value}}) => (
              <BasicSlider title="Rating" onChange={onChange} value={value} sx={styles.ratingSlider as CSSProperties} />
            )}
          />
        </Box>
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
