import {useEffect} from 'react';
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
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import debounce from 'lodash/debounce';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {formStyles} from './ProductFiltersForm.styles';

const ProductFiltersForm = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: {isValid}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productFiltersSchema),
    defaultValues: {
      priceRange: filters.priceRange,
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
    const params: any = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
      maxRating: ratingRange[1]
    };
    setSearchParams(params);
  };

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
              <BasicSlider
                title="Rating"
                onChange={onChange}
                value={value}
                sx={formStyles.ratingSlider as CSSProperties}
              />
            )}
          />
        </Box>
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
