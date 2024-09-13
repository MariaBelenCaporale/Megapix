import './styles.css';
import { useTranslation } from 'react-i18next';
import Mp from '../../../images/mp.png';

const CardTurist = () => {
    const { t } = useTranslation();

    return (
        <div className='turismCardOne'>
            <div className='orderCardTur'>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                        <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Vacacionar')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Estudiar')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Vivir')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Visitar familia')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Trabajar')}</h3>
                    </div>
                </div>
            </div>
            <div className='containerCardNext'>
                <div className='askTitle'> 
                    <h2 className='askCardTur'>{t('¿Por qué elegirnos?')}</h2>
                </div>
                <div className='textTurOne'>
                    <p className='textCardTur'>{t('Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.')}</p>
                </div>
            </div>
        </div>
    )
};

export default CardTurist;
