import './HomePage.sass';
import MainTitle from '@/components/typography/MainTitle/MainTitle';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {useAppDispatch} from '@/store/hooks';
import {useEffect} from 'react';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import SecondaryTitle from '@/components/typography/SecondaryTitle/SecondaryTitle';
import AsideFilters from '@components/AsideFilters/AsideFilters';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <section className="products">
      <div className="products__title">
        <MainTitle text="Products List" />
        <Total value={products.length} />
      </div>
      <div className="products__main">
        <div className='productsFilters'>
          <AsideFilters />
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
