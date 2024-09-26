import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from "prop-types";
import 'swiper/css';
import 'swiper/css/effect-creative';
import './styles.css';

const SwiperCard = ({ imagen, imagenUno, imagenDos, imagenTres }) => {
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
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide> <img className='imgSwipper' src={imagen} /> </SwiperSlide>
        <SwiperSlide><img className='imgSwipper' src={imagenUno} /></SwiperSlide>
        <SwiperSlide> <img className='imgSwipper' src={imagenDos} /></SwiperSlide>
        <SwiperSlide>S <img className='imgSwipperTres' src={imagenTres} /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      ></Swiper>
</>
      )}

      export default SwiperCard;
      
 SwiperCard.propTypes = {
imagen: PropTypes.string.isRequired,
  imagenUno: PropTypes.string.isRequired,
   imagenDos: PropTypes.string.isRequired,
   imagenTres: PropTypes.string.isRequired,
 }


