import { EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from "prop-types";
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';
import './styles.css';

const SwiperCard = ({ imagen, imagenUno, imagenDos, imagenTres, imageStyles }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        modules={[EffectCreative, Autoplay]} 
        className="mySwiper"
      >
        <SwiperSlide> <img className='imgSwipper' src={imagen} style={imageStyles[0]} /> </SwiperSlide>
        {imagenUno && (
          <SwiperSlide><img className='imgSwipper' src={imagenUno} style={imageStyles[1]} /></SwiperSlide>
        )}
        {imagenDos && (
          <SwiperSlide><img className='imgSwipper' src={imagenDos} style={imageStyles[2]} /></SwiperSlide>
        )}
        {imagenTres && (
          <SwiperSlide><img className='imgSwipper' src={imagenTres} style={imageStyles[3]} /></SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default SwiperCard;

SwiperCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  imagenUno: PropTypes.string,
  imagenDos: PropTypes.string,
  imagenTres: PropTypes.string,
  imageStyles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
