import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import {useAppSelector} from '@/store/hooks';
import ProductFiltersForm from '@components/forms/ProductFiltersForm/ProductFiltersForm';
import SortWidget from '@components/SortWidget/SortWidget';
import PaginationPanel from '@/components/PaginationPanel/PaginationPanel';
import {selectTotal} from '@/store/slices/products/products.selectors';

const HomePage = () => {
  const total = useAppSelector(selectTotal);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="All Products" />
        <Total value={total} label="Products" />
      </div>
      <SortWidget />
      <div className="products__main">
        <div className="productsFilters">
          <ProductFiltersForm />
        </div>
        <div className="productsList">
          <ProductsList />
        </div>
      </div>
      <PaginationPanel />
    </section>
  );
};

export default HomePage;
