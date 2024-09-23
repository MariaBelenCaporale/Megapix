import { useTranslation } from 'react-i18next';
import './styles.css';



const TuristTwo = () => {
    const { t } = useTranslation();
    return (
        <div className='containerTuristTwo'>
            <div className='containerTurTwo'>
            <h2 className='titleTuristTwo'>{t('Paga desde tu celular')}</h2>
            <p className='subtitleTuristTwo'>{t('Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.')}</p>
            </div>
        </div>
    )
}

export default TuristTwo;