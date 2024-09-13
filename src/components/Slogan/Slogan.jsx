import './styles.css';
import Rayito from '@images/rayo.png';
import { useTranslation } from 'react-i18next';


const Slogan = () => {
    const { t } = useTranslation();

    return (
        <div className="sloganContainer">
            <div className="containerRayoFooter">
            <img className="rayito" src={Rayito} />
            </div>
            <div className='titleSloganContainer'>
            <h2 className="titleSlogan">{t('Megapix, innovando el presente & futuro')}</h2>
            </div>
      </div>
    )
}

export default Slogan;