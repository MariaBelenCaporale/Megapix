import Inputs from '../../components/Inputs/Inputs';
import { useTranslation } from 'react-i18next';
import './styles.css';

const SectionThree = () => {
    const { t } = useTranslation();
    return (
        <section className='containerSection3'>
            <div>
            <h2 className='titleSectionThree'>{t('¿Cómo funciona?')}</h2>
            <p className='subSectionThree'>{t('¡Realicemos un cobro en vivo y en directo!')}</p>
            </div>

            <div className='containerInputs3'>
                <Inputs />
            </div>
        </section>
    )
}

export default SectionThree;