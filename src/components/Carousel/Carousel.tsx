import Slider from 'react-slick';
import './Carousel.sass';
import {ReactNode} from 'react';

interface Responsive {
  breakpoint: number;
  settings: {slidesToShow: number};
}

interface CarouselProps {
  slidesToShow?: number;
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  children: ReactNode;
  responsive?: Responsive[];
}

const Carousel = ({
  slidesToShow = 1,
  dots = true,
  arrows = true,
  autoplay = false,
  infinite = false,
  responsive,
  children
}: CarouselProps) => {
  const settings = {
    arrows: arrows,
    dots: dots,
    autoplay: autoplay,
    infinite: infinite,
    responsive: responsive,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
