import './styles.css';
import { useTranslation } from 'react-i18next';

const TextMove = () => {
    const { t } = useTranslation();
    const text = t('cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis');

    return (
        <div className='textMoveContainer'>
            <div className='textMoveWrapper'>
                <p className='textMove'>{text}</p>
                <span className='textMoveSpacer'></span>
                <p className='textMove'>{text}</p>
            </div>
        </div>
    );
}

export default TextMove;
