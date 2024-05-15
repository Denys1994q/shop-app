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
import {decodeParamsArray} from '@/services/decodeParamsArray';
import CheckboxesList from '@/components/CheckboxesList/CheckboxesList';

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
      ratingRange: filters.ratingRange,
      categories: filters.categories
    }
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: any = Object.fromEntries(searchParams.entries());
    const {minPrice, maxPrice, minRating, maxRating, categories} = params;
    if (minPrice && maxPrice) setValue('priceRange', [+minPrice, +maxPrice]);
    if (minRating && maxRating) setValue('ratingRange', [+minRating, +maxRating]);
    if (categories) setValue('categories', decodeParamsArray(categories));
    const formValues = getValues();
    dispatch(updateFilters(formValues));
  }, []);

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

  const onSubmit = (): void => {
    const formValues: any = getValues();
    dispatch(updateFilters(formValues));
    dispatch(
      getAllProducts({
        minPrice: formValues.priceRange[0],
        maxPrice: formValues.priceRange[1],
        minRating: formValues.ratingRange[0],
        maxRating: formValues.ratingRange[1],
        categories: formValues.categories.join(',')
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
        <Box sx={formStyles.categories}>
          <Controller
            name="categories"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <CheckboxesList
                title="Categories"
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
      </Box>
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
