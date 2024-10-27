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
            medio: 'Ámbito',
            fecha: '23/10/24',
            texto: 'Lanzan plataforma tecnológica que permite a los brasileños pagar por transferencia sus gastos en Argentina.'
        },
        {
            medio: 'Info Mendoza',
            fecha: '23/10/24',
            texto: 'Una solución financiera que elimina barreras de cambio entre Argentina y Brasil.'
        },
        {
            medio: 'Rede Argentina',
            fecha: '23/10/24',
            texto: 'MegaPix: fintech soluciona barreiras cambiais entre a Argentina e o Brasil – por Fabián Quintá'
        },
        {
            medio: 'Reportur',
            fecha: '23/10/24',
            texto: 'Lanzan Megapix como medio de pago para brasileros en Argentina.'
        },
        {
            medio: 'RoadShow',
            fecha: '23/10/24',
            texto: 'Llega una nueva solución para que los comerciantes le cobren a los turistas brasileños.'
        },
        {
            medio: 'Entorno Económico',
            fecha: '23/10/24',
            texto: 'Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'
        },
        {
            medio: 'Jornada Online',
            fecha: '23/10/24',
            texto: 'Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil'
        },
        {
            medio: 'Eco Cuyo',
            fecha: '23/10/24',
            texto: 'Atención Mendoza: llega una plataforma que permite a los brasileños pagar por transferencia sus gastos en Argentina.'
        },
        {
            medio: 'M. News',
            fecha: '23/10/24',
            texto: 'Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil'
        },
        {
            medio: 'La Pampa 24',
            fecha: '23/10/24',
            texto: 'Lanzan plataforma tecnológica que permite a los brasileños pagar por transferencia sus gastos en Argentina'
        },
        {
            medio: 'Norte en línea',
            fecha: '23/10/24',
            texto: 'Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'
        },
        {
            medio: 'Ovrik',
            fecha: '23/10/24',
            texto: 'Con Megapix, los comercios argentinos ya pueden cobrar en reales y recibir dólares digitales'
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
                    {['Forbes', 'IProUp', 'MDZ Online', 'Ámbito', 'Info Mendoza', 'Rede Argentina', 'Reportur', 'RoadShow', 'Entorno Económico', 'Jornada Online', 'Eco Cuyo', 'M. News', 'La Pampa 24', 'Norte en línea', 'Ovrik'  ].map(medio => (
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
