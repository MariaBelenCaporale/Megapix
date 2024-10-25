import { useState } from 'react';
import CardPrensa from '../../components/CardPrensa/CardPrensa';
import LanguageSelect from '../../components/Languaje/LanguageSelect';
import Logo from '@images/logoNeon.png';
import './styles.css';
import ButtonNav from '../../components/buttonTurist/ButtonTurist';

const Prensa = () => {
    const [selectedMedium, setSelectedMedium] = useState('');

    const cardsData = [
        {
            medio: 'Forbes',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: 'IProUp',
            fecha: '23/10/24',
            texto: 'Impulso a emprendedores y pymes: lanzan herramienta para facilitar negocios con Brasil.'
        },
        {
            medio: 'MDZ Online',
            fecha: '23/10/24',
            texto: 'Brasileños podrán pagar con Pix en el país gracias a un "invento" argentino.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Impulso a emprendedores y pymes: lanzan herramienta para facilitar negocios con Brasil.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Brasileños podrán pagar con Pix en el país gracias a un "invento" argentino.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Impulso a emprendedores y pymes: lanzan herramienta para facilitar negocios con Brasil.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Brasileños podrán pagar con Pix en el país gracias a un "invento" argentino.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Impulso a emprendedores y pymes: lanzan herramienta para facilitar negocios con Brasil.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Brasileños podrán pagar con Pix en el país gracias a un "invento" argentino.'
        },
        {
            medio: '',
            fecha: '23/10/24',
            texto: 'Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'
        },

    ];

    const handleFilter = (medio) => {
        setSelectedMedium(medio);
    };

    return (
        <section className='sectionPrensa'>
            <div className="containerNavCondiciones">
                <div className="containerLogo">
                    <a className="linkLogoNav" href="/">
                        <img className="logoCon" src={Logo} alt="Logo Megapix" />
                    </a>
                </div>
                <LanguageSelect />
            </div>
            <div className='contenedorPrensaTotal'>
                <h2 className='tituloPrensa'>PRENSA</h2>
                <div className='contenedorButtonNav'>
                    {['Forbes', 'IProUp', 'MDZ Online', 'Formes'].map(medio => (
                        <ButtonNav 
                            key={medio}
                            title={medio}
                            onClick={() => handleFilter(medio)}
                        />
                    ))}
                    <ButtonNav 
                        title='Todos'
                        onClick={() => handleFilter('')}
                    />
                </div>

                <div className='filaPrensa'>
                    {cardsData
                        .filter(card => selectedMedium === '' || card.medio === selectedMedium)
                        .reduce((rows, card, index) => {
                            
                            if (index % 3 === 0) {
                                rows.push([]);
                            }
                            rows[rows.length - 1].push(card);
                            return rows;
                        }, [])
                        .map((row, rowIndex) => (
                            <div key={rowIndex} className='columUnoPrensa'>
                                {row.map(card => (
                                    <CardPrensa 
                                        key={card.medio + card.fecha} 
                                        medio={card.medio}
                                        fecha={card.fecha}
                                        texto={card.texto}
                                    />
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
};

export default Prensa;
