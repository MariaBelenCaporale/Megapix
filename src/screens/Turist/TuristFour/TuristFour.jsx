import { useTranslation } from 'react-i18next';
import PagoQRbr from '@images/PagoQR-BR.mp4';
import './styles.css';

const TuristFour = () => {
    const { t } = useTranslation();

    return (
        <div className='containerHow'>
            <h2 className='titleTuristFour'>{t('Mirá que fácil')}</h2>
            <p className='subtitleFour'>{t('¡Es más que un método de pago, sumate a la experiencia megapix!')}</p>
            <div className='videoWrapper'>
                <video 
                    src={PagoQRbr} 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    className='videoElement' 
                />
            </div>
        </div>
    )
}

export default TuristFour;
