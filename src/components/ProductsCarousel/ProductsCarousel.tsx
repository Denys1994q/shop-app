import {Box} from '@mui/material';
import Carousel from '../Carousel/Carousel';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import SecondaryProductCard from '../cards/SecondaryProductCard/SecondaryProductCard';
import {useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';

const ProductsCarousel = () => {
  const products = useAppSelector(selectProducts);

  const productsSlides = products.map(({title, description, images, price, discount}) => (
    <div>
      <SecondaryProductCard
        image={images[0]}
        title={title}
        description={description}
        price={price}
        discount={discount}
      />
    </div>
  ));

  const responsiveCarouselSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ];

  return (
    <Box sx={{background: '#FDFDFD', padding: '64px 45px'}}>
      <Box mb={4}>
        <SecondaryTitle text="You may will be love" />
      </Box>
      <Carousel slidesToShow={4} autoplay={true} infinite={true} dots={false} responsive={responsiveCarouselSettings}>
        {productsSlides}
      </Carousel>
    </Box>
  );
};

export default ProductsCarousel;
