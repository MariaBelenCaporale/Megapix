import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useTranslation } from 'react-i18next';
import './styles.css';

const SectionSeven = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question:t('¿La plataforma tiene costo?'),
            answer: t('No, los servicios de Megapix son completamente gratuitos. Solo debes considerar el costo de la red cripto para los retiros, una comisión que es ajena a Megapix y depende de la red blockchain utilizada.'),
        },
        {
            question: t("¿Qué es Pix?"),
            answer: t("PIX es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil. Esta tecnología te permite recibir pagos en reales de forma rápida, segura y sin costo, convirtiéndolos automáticamente en USDT."),
        },
        {
            question: t("¿Qué es USDT?"),
            answer: t("USDT es una criptomoneda estable (stablecoin) que mantiene su valor vinculado al dólar estadounidense. Esto la convierte en una de las opciones más seguras y confiables dentro del mercado de criptomonedas, ideal para proteger el valor de los activos frente a la volatilidad."),
        },
        {
            question: t("¿El dinero que recibo queda en Megapix o debo vincular una cuenta?"),
            answer: t("Megapix te proporciona una cuenta donde se almacenarán todos los pagos que recibas. Desde esta cuenta, podrás gestionar tu dinero, realizando conversiones a criptomonedas o pesos argentinos según prefieras. Es obligatorio registrar al menos una cuenta para poder retirar tus fondos cuando lo desees; si realizas retiros en criptomonedas, asegúrate de que la cuenta acepta criptomonedas. Además, podrás registrar múltiples cuentas, siempre y cuando estén a tu nombre."),
        },
        {
            question: t("¿Debo descargar alguna app?"),
            answer: t("No es necesario descargar nada. Megapix está diseñada para ser accesible y fácil de usar. Es una plataforma web que puedes utilizar desde cualquier dispositivo, brindándote la comodidad de acceder a ella sin descargas adicionales y desde donde lo necesites."),
        },
    ];

    return (
        <section className='containerSecSeven'>
            <div className='titleSectionSeven'>
                <h2 className='titleSeven'>{t('Preguntas frecuentes')}</h2>
            </div>
            <div className='containerAsk'>
                {faqs.map((faq, index) => (
                    <div key={index} className='ask'>
                        <div
                            className='question'
                            onClick={() => handleToggle(index)}
                        >
                            <p className={`questionText ${activeIndex === index ? 'active' : ''}`}>
                                {faq.question}
                            </p>
                            
                            <span className={`icon ${activeIndex === index ? 'open' : ''}`}>
                                <KeyboardArrowDownRoundedIcon />
                            </span>
                        </div>
                        <div className='line'> </div>
                        {activeIndex === index && (
                            <div className='response'>
                                <p className='responseText'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionSeven;
