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
            question:t('¿Cómo puedo pagar en Brasil utilizando Pix?'),
            answer: t('Escaneando el QR o haciendo click en el link de pago desde tu cuenta de preferencia'),
        },
        {
            question: t("¿Es seguro pagar con Pix en Argentina?"),
            answer: t("Sí, Megapix garantiza transacciones seguras utilizando el sistema *Pix*, que está respaldado por el Banco Central de Brasil, asegurando la protección de tus datos y fondos."),
        },
        {
            question: t("¿Cuánto tiempo tarda en procesarse el pago?"),
            answer: t("Las transferencias a través de *Pix* son instantáneas, por lo que tu pago se reflejará en la cuenta del comerciante al momento de completarlo."),
        },
        {
            question: t("¿Puedo usar Megapix en cualquier comercio en Argentina?"),
            answer: t("Megapix* está disponible en los comercios afiliados a la plataforma. Te recomendamos consultar con el comercio si aceptan pagos a traves de *Megapix* antes de realizar tu compra."),
        },
        {
            question: t("¿Qué moneda utilizaré al hacer el pago?"),
            answer: t("Realizarás tu pago en reales brasileños."),
        },
        {
            question: t("¿Puedo usar Megapix desde mi celular?"),
            answer: t("Sí, puedes acceder a Megapix desde cualquier dispositivo móvil sin necesidad de descargar una app. Solo necesitas conexión a internet y un navegador"),
        },
        {
            question: t("¿Es necesario que tenga una cuenta bancaria argentina para usar Megapix?"),
            answer: t("No, solo necesitas tu cuenta de *Pix* en Brasil para realizar pagos en Argentina a través de Megapix."),
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
