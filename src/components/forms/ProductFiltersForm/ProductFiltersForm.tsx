import {useCallback, useEffect, useState} from 'react';
import SliderWithInputs from '../../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {productFiltersSchema} from '@constants/productFilters.validation';
import BasicSlider from '@/components/BasicSlider/BasicSlider';
import {Box, Checkbox, FormControlLabel} from '@mui/material';
import {CSSProperties} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {Filters} from '@/store/slices/filters/filters.model';
import {useSearchParams} from 'react-router-dom';
import BasicCheckbox from '@/components/inputs/BasicCheckbox/BasicCheckbox';
import SecondaryTitle from '@/components/typography/SecondaryTitle/SecondaryTitle';
import CheckboxesList from '@/components/CheckboxesList/CheckboxesList';
import {useDebounce} from '@/hooks/useDebounce';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {getAllProducts} from '@/store/slices/products/products.thunks';

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
  categories: [];
}

const ProductFiltersForm = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  let [searchParams, setSearchParams] = useSearchParams();
  const {
    control,
    setValue,
    watch,
    formState: {errors}
  } = useForm({
    // mode: 'onChange',
    resolver: yupResolver(productFiltersSchema),
    defaultValues: {
      priceRange: filters.priceRange,
      ratingRange: filters.ratingRange,
      categories: []
    }
  });

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange, categories} = filters;
    const params: any = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
      maxRating: ratingRange[1],
      categories: categories.join(',')
    };
    setSearchParams(params);
  };

  // const debouncedValue = useDebounce(filters, 500);

  // const search = useCallback(async () => {}, [debouncedValue]);

  // useEffect(() => {
  //   search();
  // }, [debouncedValue, search]);

  // перевірка чи поле вже touched або перевірка на наявність помилки
  useEffect(() => {
    const subscription = watch((value: any) => {
      onSubmit(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (value: any): void => {
    dispatch(updateFilters(value));
    // updateSearchParams(value);
  };

  const [s, setS] = useState([1, 1000]);

  const onC = (v: any) => {
    setS(v);
  };

  return (
    <form>
      <Box sx={styles.box}>
        <Box>
          <BasicSlider title="Rating" onChange={onC} value={s} />
          <Controller
            name="categories"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <CheckboxesList
                onChange={onChange}
                value={value}
                items={[
                  {label: 'Smartphones, TV, Electronics', value: 1},
                  {label: 'Computers', value: 2},
                  {label: 'Household appliances', value: 3},
                  {label: 'Sport', value: 4},
                  {label: 'Game Zone', value: 5}
                ]}
              />
            )}
          />
        </Box>
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
