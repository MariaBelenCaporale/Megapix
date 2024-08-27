import { useState } from 'react';
import './styles.css';

const SectionSeven = () => {

    const [activeIndex, setActiveIndex] = useState(null);


    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

   
    const faqs = [
        {
            question: "¿Qué es la tecnología PIX?",
            answer: "Respuesta",
        },
        {
            question: "¿Cómo funciona el dólar digital USDT?",
            answer: "Respuesta 2",
        },
        {
            question: "¿Qué características debo cumplir para usar Megapix?",
            answer: "Respuesta 3",
        }
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
                            <p>{faq.question}</p>
                            
                            <span className={`icon ${activeIndex === index ? 'open' : ''}`}>+</span>
                           
                        </div>
                        <div className='line'> </div>
                        {activeIndex === index && (
                            <div className='response'>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionSeven;
