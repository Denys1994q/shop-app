import {useEffect} from 'react';
import BasicSelect from '../inputs/BasicSelect/BasicSelect';
import {Box} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {useSearchParams} from 'react-router-dom';
import {sortProductOptions} from '@/services/enumLabelResolver';

const SortWidget = () => {
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const filters = useAppSelector(selectFilters);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(updateFilters({sort: params.sort}));
  }, []);

  const handleChange = (value: number): void => {
    dispatch(updateFilters({sort: value}));
    const params = Object.fromEntries(searchParams.entries());
    params.sort = value;
    setSearchParams(params);
    dispatch(
      getAllProducts({
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.ratingRange[0],
        maxRating: filters.ratingRange[1],
        categories: filters.categories.join(','),
        brands: filters.brands.join(','),
        sort: value
      })
    );
  };

  return (
    <Box mb={4}>
      <BasicSelect value={filters.sort} label="Sort by:" onChange={handleChange} options={sortProductOptions} />
    </Box>
  );
};

export default SortWidget;
