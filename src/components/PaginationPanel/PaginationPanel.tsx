import {useState} from 'react';
import BasicPagination from '../BasicPagination/BasicPagination';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {selectPages, selectTotal} from '@/store/slices/products/products.selectors';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import Total from '../Total/Total';
import {Box} from '@mui/material';
import {setPage} from '@/store/slices/filters/filters.slice';

const PaginationPanel = () => {
  const dispatch = useAppDispatch();
  const pagesNumber = useAppSelector(selectPages);
  const page = useAppSelector((state) => state.filtersSlice.currentPage);
  const filters = useAppSelector(selectFilters);
  const total = useAppSelector(selectTotal);

  const handlePageChange = (page: number): void => {
    dispatch(setPage(page));
    dispatch(
      getAllProducts({
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.ratingRange[0],
        maxRating: filters.ratingRange[1],
        categories: filters.categories.join(','),
        brands: filters.brands.join(','),
        sort: filters.sort,
        page
      })
    );
    scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <BasicPagination currentPage={page} totalPages={pagesNumber} onChange={handlePageChange} />
      <Total value={total} />
    </Box>
  );
};

export default PaginationPanel;
