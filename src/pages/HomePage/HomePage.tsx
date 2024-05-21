import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import ProductFiltersForm from '@components/forms/ProductFiltersForm/ProductFiltersForm';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import SortWidget from '@components/SortWidget/SortWidget';
import PaginationPanel from '@components/PaginationPanel/PaginationPanel';

const HomePage = () => {
  const products = useAppSelector(selectProducts);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="All Products" />
        <Total value={products.length} />
      </div>
      <div className="products__sort">
        <SortWidget />
      </div>
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
