import {useRef, useState} from 'react';
import BasicPagination from '../BasicPagination/BasicPagination';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {selectPages, selectTotal} from '@/store/slices/products/products.selectors';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import Total from '../Total/Total';
import {Box} from '@mui/material';
import {setPage} from '@/store/slices/filters/filters.slice';
import ChevronBtn from '../btns/ChevronBtn/ChevronBtn';

const PaginationPanel = () => {
  const dispatch = useAppDispatch();
  const pagesNumber = useAppSelector(selectPages);
  const page = useAppSelector((state) => state.filtersSlice.currentPage);
  const filters = useAppSelector(selectFilters);
  const total = useAppSelector(selectTotal);
  const [pagesPerPageState, setPagesPerPageState] = useState(5);
  const pagesPerPage = useRef(5);

  const handlePageChange = (page: number): void => {
    setPagesPerPageState(5);
    pagesPerPage.current = 5;
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

  const showMore = () => {
    scrollTo({top: 0, behavior: 'smooth'});
    setPagesPerPageState((prev) => prev + 5);
    pagesPerPage.current = pagesPerPage.current + 5;
    dispatch(
      getAllProducts({
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.ratingRange[0],
        maxRating: filters.ratingRange[1],
        categories: filters.categories.join(','),
        brands: filters.brands.join(','),
        sort: filters.sort,
        page,
        pageSize: pagesPerPage.current
      })
    );
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <BasicPagination
        currentPage={page}
        totalPages={pagesNumber}
        showMore={pagesPerPageState}
        onChange={handlePageChange}
      />
      <ChevronBtn onClick={showMore} text="Show More Products" withoutChevron={true} />
      <Total value={total} label="Products" />
    </Box>
  );
};

export default PaginationPanel;
