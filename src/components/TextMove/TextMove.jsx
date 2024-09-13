import './styles.css';
import { useTranslation } from 'react-i18next';

const TextMove = () => {
    const { t } = useTranslation();

    return (
        <div className='textMoveContainer'>
            <div className='textMoveWrapper'>
                <p className='textMove'>
                {t('cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis')}
                    </p>
            </div>
        </div>
    );
}

export default TextMove;
