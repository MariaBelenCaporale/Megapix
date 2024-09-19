import { useTranslation } from 'react-i18next';
import './styles.css';



const TuristTwo = () => {
    const { t } = useTranslation();
    return (
        <div className='containerTuristTwo'>
            <div className='containerTurTwo'>
            <h2 className='titleTuristTwo'>{t('Paga desde tu celular')}</h2>
            <p className='subtitleTuristTwo'>{t('Realizá tus pagos con Megapix en cualquier lugar del país. Eligiendo la opción de tu preferencia')}</p>
            </div>
        </div>
    )
}

export default TuristTwo;