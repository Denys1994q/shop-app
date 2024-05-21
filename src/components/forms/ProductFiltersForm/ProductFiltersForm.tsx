import {useEffect, useState} from 'react';
import SliderWithInputs from '../../SliderWithInputs/SliderWithInputs';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {productFiltersSchema} from '@constants/productFilters.validation';
import BasicSlider from '@/components/BasicSlider/BasicSlider';
import {Box, Button} from '@mui/material';
import {CSSProperties} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {resetFilters, updateFilters} from '@/store/slices/filters/filters.slice';
import {Filters} from '@/store/slices/filters/filters.model';
import {useSearchParams} from 'react-router-dom';
import CheckboxesList from '@/components/CheckboxesList/CheckboxesList';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {brandItems} from '@/models/brands.enum';
import {decodeParamsArray} from '@/services/decodeParamsArray';
import debounce from 'lodash/debounce';
import {categoriesOptions} from '@/services/enumLabelResolver';

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

const ProductFiltersForm = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
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
  const countByCategory = useAppSelector((state) => state.productsSlice.countByCategory);

  useEffect(() => {
    const params: any = Object.fromEntries(searchParams.entries());
    const {minPrice, maxPrice, minRating, maxRating, categories, brands} = params;
    if (minPrice && maxPrice) setValue('priceRange', [+minPrice, +maxPrice]);
    if (minRating && maxRating) setValue('ratingRange', [+minRating, +maxRating]);
    if (categories) setValue('categories', decodeParamsArray(categories));
    if (brands) setValue('brands', decodeParamsArray(brands));
    const formValues = getValues();
    dispatch(updateFilters(formValues));

    return () => {
      dispatch(resetFilters());
    };
  }, []);

  const updateSearchParams = (filters: Filters): void => {
    const {priceRange, ratingRange, categories, brands} = filters;
    let params: any = {};
    const sortParam = Object.fromEntries(searchParams.entries()).sort;
    if (priceRange[0] !== undefined) params.minPrice = priceRange[0];
    if (priceRange[1] !== undefined) params.maxPrice = priceRange[1];
    if (ratingRange[0] !== undefined) params.minRating = ratingRange[0];
    if (ratingRange[1] !== undefined) params.maxRating = ratingRange[1];
    if (categories && categories.length > 0) params.categories = categories.join(',');
    if (brands && brands.length > 0) params.brands = brands.join(',');
    if (sortParam) params.sort = sortParam;
    setSearchParams(params);
  };

  const onSubmit = (): void => {
    console.log('onSubmit');
    scrollTo({top: 0, behavior: 'smooth'});
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
    const subscription = watch((_, action) => {
      if (!action.type) {
        dispatch(getAllProducts({}));
        return;
      }

      return handleSubmit(debouncedSubmit)();
    });

    return () => subscription.unsubscribe();
  }, [watch, filters.sort, isValid]);

  const handleReset = () => {
    console.log('handle reset');
    setSearchParams('');
    reset({}, {keepDefaultValues: true});
    dispatch(resetFilters());
    scrollTo({top: 0, behavior: 'smooth'});

    // // reset({priceRange: [1, 1200], ratingRange: [1, 5], categories: [], brands: []});
    // dispatch(updateFilters({priceRange: [1, 1200], ratingRange: [1, 5], categories: [], brands: [], sort: ''}));
  };

  const categoriesWithAmount = categoriesOptions.map((categoryEnum) => {
    return {
      ...categoryEnum,
      amount: countByCategory.find((item: any) => item._id === categoryEnum.value)
        ? countByCategory.find((item: any) => item._id === categoryEnum.value).totalProducts
        : 0
    };
  });

  return (
    <form>
      <Box sx={styles.box}>
        <Box>
          <Controller
            name="categories"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <CheckboxesList
                title="Categories"
                onChange={onChange}
                value={value}
                items={categoriesWithAmount}
                // items={[
                //   {
                //     label: 'Smartphones, TV, Electronics',
                //     value: 1,
                //     amount:
                //       countByCategory.length > 0 &&
                //       countByCategory.find((category: any) => category._id === 1).totalProducts
                //   },
                //   {label: 'Computers', value: 2, amount: 10},
                //   {label: 'Household appliances', value: 3, amount: 10},
                //   {label: 'Sport', value: 4, amount: 10},
                //   {label: 'Game Zone', value: 5, amount: 10}
                // ]}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="brands"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <CheckboxesList title="Brands" onChange={onChange} value={value} items={brandItems} />
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
        <Box>
          <Controller
            name="priceRange"
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <SliderWithInputs title="Price" onChange={onChange} value={value} error={error} />
            )}
          />
        </Box>
      </Box>
      <Box sx={{textAlign: 'center'}} mt={6}>
        <Button
          type="button"
          onClick={handleReset}
          sx={{color: '#A9A9A9', fontWeight: 'bold', fontSize: 14, textTransform: 'capitalize'}}
        >
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
