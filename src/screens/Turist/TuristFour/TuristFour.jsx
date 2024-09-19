import { useTranslation } from 'react-i18next';
import PagoQRbr from '@images/PagoQR-BR.mp4';
import './styles.css';

const TuristFour = () => {
    const { t } = useTranslation();

    return (
        <div className='containerHow'>
            <h2 className='titleTuristFour'>{t('¿CÓMO FUNCIONA?')}</h2>
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
