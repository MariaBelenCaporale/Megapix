import { useTranslation } from 'react-i18next';
import PagoQRar from '@images/PagoQR-ES.gif';
import PagoQRbr from '@images/PagoQR-BR.gif';
import CarouselImg from '@images/carouselImg.gif';
import CarouselImgBr from '@images/carouselImgBr.gif';
import './styles.css';

const TuristFour = () => {
    const { t, i18n } = useTranslation();

    const paymentImage = i18n.language === 'br' ? PagoQRbr : PagoQRar;
    const carouselLang = i18n.language === 'br' ? CarouselImgBr : CarouselImg;

    return (
        <div className='containerHow'>
            <div className='containerTextFour'>
                <h2 className='titleTuristFour'>{t('Mirá que fácil')}</h2>
                <p className='subtitleFour'>{t('¡Es más que un método de pago, sumate a la experiencia megapix!')}</p>
            </div>
            <div className='videoWrapper'>
                <div className='containerElementGifUno'>
                    <img src={carouselLang} className='carouselElement'/>
                </div>
                <div className='containerElementGif'>
                    <img src={paymentImage} className='videoElement' />
                </div>
                <div className='backImg'></div>
            </div>
        </div>
    );
}

export default TuristFour;
