import {useEffect, useState} from 'react';
import BasicSelect from '../inputs/BasicSelect/BasicSelect';
import {Box} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {useSearchParams} from 'react-router-dom';

const SortWidget = () => {
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const filters = useAppSelector(selectFilters);
  const [value, setValue] = useState(filters.sort);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setValue(params.sort);
    dispatch(updateFilters({sort: params.sort}));
  }, []);

  const handleChange = (value: any): void => {
    dispatch(updateFilters({sort: value}));
    setValue(value);
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
    <Box sx={{width: '181px', mb: 4}}>
      <BasicSelect
        value={value}
        label="Sort by:"
        onChange={(e) => handleChange(e)}
        options={[
          {value: 1, label: 'From cheap to expensive'},
          {value: -1, label: 'Form expensive to cheap'}
        ]}
      />
    </Box>
  );
};

export default SortWidget;
