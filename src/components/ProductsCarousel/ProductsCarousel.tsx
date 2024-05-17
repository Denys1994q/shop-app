import {Box} from '@mui/material';
import Carousel from '../Carousel/Carousel';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import SecondaryProductCard from '../cards/SecondaryProductCard/SecondaryProductCard';

interface ProductsCarouselProps {
  //   images: string[];
}

// outlined як картка з
// папка cards і в ній два види карток: одна з головного екрану, інша зі слайдера
const ProductsCarousel = () => {
  return (
    <Box sx={{background: '#FDFDFD', padding: '64px 45px'}}>
      <Box mb={4}>
        <SecondaryTitle text="You may will be love" />
      </Box>
      <Carousel
        slidesToShow={4}
        // autoplay={true}
        infinite={true}
        dots={false}
      >
        <div>
          <SecondaryProductCard />
        </div>
        <div>
          <SecondaryProductCard />
        </div>
        <div>
          <SecondaryProductCard />
        </div>
        <div>
          <SecondaryProductCard />
        </div>
      </Carousel>
    </Box>
  );
};

export default ProductsCarousel;
