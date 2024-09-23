import { useTranslation } from 'react-i18next';
import Mp from '@images/mp.png';
import './styles.css';

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
                        <h3 className='titleCardTurOne'>{t('Vacacioná')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Estudiá')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Viví')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Visitá')}</h3>
                    </div>
                </div>
                <div className='cardTurOne'>
                    <div className='imgTuristPix'>
                    <img className='imgMove' src={Mp} alt='Imagen de Megapix' />
                    </div>
                    <div className='textCardTurOne'>
                        <h3 className='titleCardTurOne'>{t('Trabajá')}</h3>
                    </div>
                </div>
            </div>
            <div className='containerCardNext'>
                <div className='askTitle'> 
                    <h2 className='askCardTur'>{t('¿Por qué elegirnos?')}</h2>
                </div>
                <div className='textTurOne'>
                    <p className='textCardTur'>{t('Somos una empresa registrada y autorizada que elimina las barreras tradicionales en el cambio de divisas. Además, simplificamos el proceso de pago, evitando conversiones costosas y la molestia de llevar grandes sumas de efectivo.')}</p>
                </div>
            </div>
        </div>
    )
};

export default CardTurist;
