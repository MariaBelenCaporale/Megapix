
import { Swiper, SwiperSlide } from 'swiper/react';
import Dinero from '@images/dinero.png';
import MisCuentas from '@images/mis-cuentas.png';
import Monedacard from '@images/monedacard.png';
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';

export default function SwiperCard() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='imgSwipper' src={Dinero} />
        </SwiperSlide>
        <SwiperSlide>
            <img className='imgSwipper' src={MisCuentas} />
        </SwiperSlide>
        <SwiperSlide>
            <img className='imgSwipper' src={Monedacard} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
