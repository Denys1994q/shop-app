import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import ProductFiltersForm from '@components/forms/ProductFiltersForm/ProductFiltersForm';
import SortWidget from '@components/SortWidget/SortWidget';

const HomePage = () => {
  const products = useAppSelector(selectProducts);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="All Products" />
        <Total value={products.length} />
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
    </section>
  );
};

export default HomePage;
