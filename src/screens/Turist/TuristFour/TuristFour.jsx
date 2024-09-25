import { useTranslation } from 'react-i18next';
import PagoQRbr from '@images/PagoQR-ES.gif';
import CarouselImg from '@images/carouselImg.gif';
import Rayo from '@images/rayo.png';
// import Galeria from '@images/galeria.png';
import './styles.css';

const TuristFour = () => {
    const { t } = useTranslation();

    return (
        <div className='containerHow'>
            <div className='containerTextFour'>
            <h2 className='titleTuristFour'>{t('Mirá que fácil')}</h2>
            <p className='subtitleFour'>{t('¡Es más que un método de pago, sumate a la experiencia megapix!')}</p>
            </div>
            <div className='videoWrapper'>
                <div className='containerElementGifUno'>
                    <img src={CarouselImg} className='carouselElement'/>
                </div>
                <div className='containerElementGif'>
                    <img src={PagoQRbr} className='videoElement' />
                </div>
                <div className='backImg'></div>
                {/* <img className='backImg' src={Galeria} /> */}
                <img className='backImgRayo' src={Rayo} />
                <img className='backImgRayoDos' src={Rayo} />
            </div>
        </div>
    )
}

export default TuristFour;
