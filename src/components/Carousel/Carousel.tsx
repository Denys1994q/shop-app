import Slider from 'react-slick';
import './Carousel.sass';
import {ReactNode} from 'react';

interface CarouselProps {
  slidesToShow?: number;
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  children: ReactNode;
}

// responsive передавати
const Carousel = ({
  slidesToShow = 1,
  dots = true,
  arrows = true,
  autoplay = false,
  infinite = false,
  children
}: CarouselProps) => {
  const settings = {
    arrows: arrows,
    dots: dots,
    autoplay: autoplay,
    infinite: infinite,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
