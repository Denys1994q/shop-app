import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {updateFilters} from '@/store/slices/filters/filters.slice';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {subscribe} from 'diagnostics_channel';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

// тут робити запит тільки, в компонентах просто оновлювати фільтри
export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstRender, setFirstRender] = useState(true);

  const updateSearchParams = (): void => {
    if (!firstRender) {
      const {priceRange, ratingRange, categories, brands, sort} = filters;
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
    } else {
      setFirstRender(false);
    }
  };

  //   useEffect(() => {
  //     updateSearchParams();
    //   dispatch(
    //     getAllProducts({
    //       minPrice: filters.priceRange[0],
    //       maxPrice: filters.priceRange[1],
    //       minRating: filters.ratingRange[0],
    //       maxRating: filters.ratingRange[1],
    //       categories: filters.categories.join(','),
    //       brands: filters.brands.join(','),
    //       sort: filters.sort
    //     })
    //   );
  //     window.scrollTo({top: 0, behavior: 'smooth'});
  //   }, [filters]);

  return {filters, updateFilters};
};
