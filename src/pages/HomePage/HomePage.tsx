import './HomePage.sass';
import Title from '@/components/Title/Title';
import ProductsList from '@/components/ProductsList/ProductsList';
import Total from '@/components/Total/Total';

const HomePage = () => {
  return (
    <section className="products">
      <div className="products__title">
        {/* main title, secondary title */}
        <Title text="Products List" />
        <Total />
      </div>
      <div className='products__main'>
        <div>filters</div>
        <div className='productsList'>
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
