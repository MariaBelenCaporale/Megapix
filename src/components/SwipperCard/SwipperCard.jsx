
import { Swiper, SwiperSlide } from 'swiper/react';

import PropTypes from "prop-types";
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';

export default function SwiperCard({ imagen, imagenUno, imagenDos, imagenTres }) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='imgSwipper' src={imagen} />
        </SwiperSlide>
        <SwiperSlide>
            <img className='imgSwipper' src={imagenUno} />
        </SwiperSlide>
        <SwiperSlide>
            <img className='imgSwipper' src={imagenDos} />
        </SwiperSlide>
        <SwiperSlide>
            <img className='imgSwipperTres' src={imagenTres} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
SwiperCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  imagenUno: PropTypes.string.isRequired,
  imagenDos: PropTypes.string.isRequired,
  imagenTres: PropTypes.string.isRequired,
}

