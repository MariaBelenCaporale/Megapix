import CardTurist from '../../../components/Card/CardTurist/CardTurist';
import { useTranslation } from 'react-i18next';
import './styles.css';

const TuristThree = () => {
    const { t } = useTranslation();

    return (
        <div className='containerTurThree'>
            <h2 className="titleTuristThree">
            {t('Vení a disfrutar de Argentina con ')}<span className="highlight">{t('Megapix')}</span>
            </h2>
            <div className='containerCardTurOne'>
                <CardTurist />
            </div>
        </div>
    )
}

export default TuristThree;