import Slider from 'react-slick';
import './Carousel.sass';

const Carousel = () => {
  const settings = {
    arrows: true,
    dots: true,
    // autoplay: true,
    infinite: true,
    // responsive
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/smartphone-photography/thumbnail.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Carousel;
