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
import {categoriesOptions, brandsOptions} from '@/services/enumLabelResolver';
import {scrollToTop} from '@/services/scrollToTop.service';

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
      categories: filters.categories,
      brands: filters.brands
    }
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: any = Object.fromEntries(searchParams.entries());
    const {minPrice, maxPrice, minRating, maxRating, categories, brands} = params;
    if (minPrice && maxPrice) setValue('priceRange', [+minPrice, +maxPrice]);
    if (minRating && maxRating) setValue('ratingRange', [+minRating, +maxRating]);
    if (categories) setValue('categories', decodeParamsArray(categories));
    if (brands) setValue('brands', decodeParamsArray(brands));
    const formValues = getValues();
    dispatch(updateFilters(formValues));
  }, []);

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange, categories, brands} = filters;
    let params: any = {};
    if (priceRange[0]) params.minPrice = priceRange[0];
    if (priceRange[1]) params.maxPrice = priceRange[1];
    if (ratingRange[0]) params.minRating = ratingRange[0];
    if (ratingRange[1]) params.maxRating = ratingRange[1];
    if (categories && categories.length > 0) params.categories = categories.join(',');
    if (brands && brands.length > 0) params.brands = brands.join(',');
    if (sortParam) params.sort = sortParam;
    setSearchParams(params);
  };

  const onSubmit = (): void => {
    scrollToTop();
    const formValues: any = getValues();
    dispatch(updateFilters(formValues));
    dispatch(
      getAllProducts({
        minPrice: formValues.priceRange[0],
        maxPrice: formValues.priceRange[1],
        minRating: formValues.ratingRange[0],
        maxRating: formValues.ratingRange[1],
        categories: formValues.categories.join(','),
        brands: formValues.brands.join(','),
        sort: filters.sort
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
            name="categories"
            control={control}
            render={({field: {onChange, value}}) => (
              <CheckboxesList title="Categories" onChange={onChange} value={value} items={categoriesOptions} />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="brands"
            control={control}
            render={({field: {onChange, value}}) => (
              <CheckboxesList title="Brands" onChange={onChange} value={value} items={brandsOptions} />
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
