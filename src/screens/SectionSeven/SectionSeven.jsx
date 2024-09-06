import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import './styles.css';

const SectionSeven = () => {

    const [activeIndex, setActiveIndex] = useState(null);


    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

   
    const faqs = [
        {
            question: "¿La plataforma tiene costo?",
            answer: "No, Megapix es completamente gratuita.",
        },
        {
            question: "¿Qué es Pix?",
            answer: "Pix es un sistema de pagos instantáneos de Brasil que te permite transferir dinero de manera rápida, segura y gratuita.",
        },
        {
            question: "¿Qué es USDT?",
            answer: "USDT es una criptomoneda estable que mantiene el mismo valor del dolar estadounidense, siendo una de las criptomonedas mas estables y seguras que hay en el mercado",
        },
        {
            question: "¿El dinero que recibo queda en Megapix o debo vincular una cuenta bancaria?",
            answer: "El dinero que recibes queda en tu cuenta de Megapix, con la opción de retirarlo instantáneamente cuando lo necesites.",
        },
        {
            question: "¿Debo descargar alguna app?",
            answer: "No es necesario. Megapix es una plataforma web, accesible desde cualquier dispositivo sin descargas.",
        },
    ];

    return (
        <section className='containerSecSeven'>
            <div className='titleSectionSeven'>
                <h2 className='titleSeven'>Preguntas frecuentes</h2>
            </div>
            <div className='containerAsk'>
                {faqs.map((faq, index) => (
                    <div key={index} className='ask'>
                        <div className='question' onClick={() => handleToggle(index)}>
                            <p className='questionText'>{faq.question}</p>
                            
                            <span className={`icon ${activeIndex === index ? 'open' : ''}`}><KeyboardArrowDownRoundedIcon /></span>
                           
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
