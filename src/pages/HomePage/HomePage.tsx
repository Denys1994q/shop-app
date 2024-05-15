import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import ProductFiltersForm from '@components/forms/ProductFiltersForm/ProductFiltersForm';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';

const HomePage = () => {
  const products = useAppSelector(selectProducts);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="Products List" />
        <Total value={products.length} />
      </div>
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
