<<<<<<< HEAD
import {useCallback, useEffect} from 'react';
=======
import {useEffect} from 'react';
>>>>>>> main
import SliderWithInputs from '../../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {productFiltersSchema} from '@constants/productFilters.validation';
import BasicSlider from '@/components/BasicSlider/BasicSlider';
import {Box} from '@mui/material';
import {CSSProperties} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {Filters} from '@/store/slices/filters/filters.model';
import {useSearchParams} from 'react-router-dom';
<<<<<<< HEAD
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
  categories: {
    maxHeight: '500px',
    overflowY: 'auto'
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
=======
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import debounce from 'lodash/debounce';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {formStyles} from './ProductFiltersForm.styles';
>>>>>>> main

const ProductFiltersForm = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
<<<<<<< HEAD
  let [searchParams, setSearchParams] = useSearchParams();
  const {
    control,
    setValue,
    watch,
    formState: {errors}
=======
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: {isValid}
>>>>>>> main
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productFiltersSchema),
    defaultValues: {
      priceRange: filters.priceRange,
<<<<<<< HEAD
      ratingRange: filters.ratingRange,
      categories: []
    }
  });

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange, categories} = filters;
=======
      ratingRange: filters.ratingRange
    }
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: any = Object.fromEntries(searchParams.entries());
    const {minPrice, maxPrice, minRating, maxRating} = params;
    if (minPrice && maxPrice) setValue('priceRange', [+minPrice, +maxPrice]);
    if (minRating && maxRating) setValue('ratingRange', [+minRating, +maxRating]);
    const formValues = getValues();
    dispatch(updateFilters(formValues));
  }, []);

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange} = filters;
>>>>>>> main
    const params: any = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
<<<<<<< HEAD
      maxRating: ratingRange[1],
      categories: categories.join(',')
=======
      maxRating: ratingRange[1]
>>>>>>> main
    };
    setSearchParams(params);
  };

<<<<<<< HEAD
  const debouncedValue = useDebounce(filters, 500);

  const search = useCallback(async () => {
    dispatch(
      getAllProducts({
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.ratingRange[0],
        maxRating: filters.ratingRange[1],
        categories: filters.categories.join(',')
      })
    );
  }, [debouncedValue]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  // перевірка чи поле вже touched або перевірка на наявність помилки
  useEffect(() => {
    const subscription = watch((value: any) => {
      onSubmit(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (value: any): void => {
    dispatch(updateFilters(value));
    updateSearchParams(value);
  };

  return (
    <form>
      <Box sx={styles.box}>
        <Box sx={styles.categories}>
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
            name="ratingRange"
            control={control}
            render={({field: {onChange, value}}) => (
              <BasicSlider title="Rating" onChange={onChange} value={value} sx={styles.ratingSlider as CSSProperties} />
            )}
          />
        </Box>
=======
  const onSubmit = (): void => {
    const formValues: any = getValues();
    dispatch(updateFilters(formValues));
    dispatch(
      getAllProducts({
        minPrice: formValues.priceRange[0],
        maxPrice: formValues.priceRange[1],
        minRating: formValues.ratingRange[0],
        maxRating: formValues.ratingRange[1]
      })
    );
    updateSearchParams(formValues);
  };

  const debouncedSubmit = debounce(onSubmit, 500);

  useEffect(() => {
    const subscription = watch(() => {
      return handleSubmit(debouncedSubmit)();
    });

    return () => subscription.unsubscribe();
  }, [watch, isValid]);

  return (
    <form>
      <Box sx={formStyles.box}>
>>>>>>> main
        <Box>
          <Controller
            name="priceRange"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <SliderWithInputs title="Price" onChange={onChange} value={value} error={error} />
            )}
          />
        </Box>
<<<<<<< HEAD
=======
        <Box>
          <Controller
            name="ratingRange"
            control={control}
            render={({field: {onChange, value}}) => (
              <BasicSlider
                title="Rating"
                onChange={onChange}
                value={value}
                sx={formStyles.ratingSlider as CSSProperties}
              />
            )}
          />
        </Box>
>>>>>>> main
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
