import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {useAppDispatch} from '@/store/hooks';
import {useCallback, useEffect} from 'react';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import SecondaryTitle from '@components/typography/SecondaryTitle/SecondaryTitle';
import ProductFiltersForm from '@components/forms/ProductFiltersForm/ProductFiltersForm';
import {selectFilters} from '@/store/slices/filters/filters.selectors';
import {useDebounce} from '@/hooks/useDebounce';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const filters = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, []);

  const debouncedValue = useDebounce(filters, 500);

  const search = useCallback(async () => {
    dispatch(
      getAllProducts({
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.ratingRange[0],
        maxRating: filters.ratingRange[1]
      })
    );
  }, [debouncedValue]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="Products List" />
        <Total value={products.length} />
      </div>
      <div className="products__main">
        <div className="productsFilters">
          <ProductFiltersForm priceRange={filters.priceRange} ratingRange={filters.ratingRange} />
        </div>
        <div className="productsList">
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <SecondaryTitle sx={{textAlign: 'center'}} text="Nothing found" />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
