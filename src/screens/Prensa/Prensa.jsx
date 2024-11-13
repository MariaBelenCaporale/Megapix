import { useState } from 'react';
import CardPrensa from '../../components/CardPrensa/CardPrensa';
import LanguageSelect from '../../components/Languaje/LanguageSelect';
import Logo from '@images/logoNeon.png';
import { useTranslation } from 'react-i18next';
import './styles.css';
import ButtonNav from '../../components/buttonTurist/ButtonTurist';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { NavLink } from "react-router-dom";
import Slogan from '../../components/Slogan/Slogan';
import Forbes from '@images/forbes.png';
import IpropUp from '@images/ipropup.png';
import Mdz from '@images/mdzPrensa.png';
import Ambito from '@images/ambito.png';
import InfoMendoza from '@images/infoMendoza.png';
import Rede from '@images/rede.png';
import Reportur from '@images/reportur.png';
import RoadShow from '@images/roadShow.png';
import Entorno from '@images/entorno.png';
import Jornada from '@images/jornada.png';
import EcoCuyo from '@images/ecoCuyo.png';
import Mnews from '@images/mnews.png';
import LaPampa from '@images/laPampa.png';
import NorteEnLinea from '@images/norteEnLinea.png';
import Ovrik from '@images/ovrik.png';

const Prensa = () => {
    const { t } = useTranslation();
    const [selectedMedium, setSelectedMedium] = useState('');
    const [visibleCards, setVisibleCards] = useState(6); 

    const cardsData = [
        {
            image: Forbes,
            medio: 'Forbes',
            fecha: '23/10/24',
            texto: t('Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina.'),
            url: 'https://www.forbesargentina.com/negocios/lanzan-una-herramienta-tecnologica-integra-pix-busca-facilitar-transacciones-brasilenos-argentina-n61445',
        },
        {
            image: IpropUp,
            medio: 'IProUp',
            fecha: '23/10/24',
            texto: t('Impulso a emprendedores y pymes: lanzan herramienta para facilitar negocios con Brasil.'),
            url: 'https://www.iproup.com/startups/50817-nueva-solucion-digital-promete-impulsar-negocios-entre-argentina-y-brasil',
        },
        {
            image: Mdz,
            medio: 'MDZ Online',
            fecha: '23/10/24',
            texto: t('Brasileños podrán pagar con Pix en el país gracias a un "invento" argentino.'),
            url: 'https://www.mdzol.com/dinero/2024/10/22/brasilenos-podran-pagar-con-pix-en-el-pais-gracias-un-invento-argentino-1161148.html',
        },
        {
            image: Ambito,
            medio: 'Ámbito',
            fecha: '23/10/24',
            texto: t('Lanzan plataforma tecnológica que permite a los brasileños pagar por transferencia sus gastos en Argentina.'),
            url: 'https://www.ambito.com/negocios/lanzan-plataforma-tecnologica-que-permite-los-brasilenos-pagar-transferencia-sus-gastos-argentina-n6073333',
        },
        {
            image: InfoMendoza,
            medio: 'Info Mendoza',
            fecha: '23/10/24',
            texto: t('Una solución financiera que elimina barreras de cambio entre Argentina y Brasil.'),
            url: 'https://infomendoza.info/y-ademas/una-solucion-financiera-que-elimina-barreras-de-cambio-entre-argentina-y-brasil',
        },
        {
            image: Rede,
            medio: 'Rede Argentina',
            fecha: '23/10/24',
            texto: t('MegaPix: fintech soluciona barreiras cambiais entre a Argentina e o Brasil – por Fabián Quintá'),
            url: 'https://redeargentina.com.br/2024/10/23/megapix-fintech-soluciona-barreiras-cambiais-entre-a-argentina-e-o-brasil-por-fabian-quinta/',
        },
        {
            image: Reportur,
            medio: 'Reportur',
            fecha: '23/10/24',
            texto: t('Lanzan Megapix como medio de pago para brasileros en Argentina.'),
            url: 'https://www.reportur.com/argentina/2024/10/23/lanzan-megapix-como-medio-de-pago-para-brasileros-en-argentina/',
        },
        {
            image: RoadShow,
            medio: 'RoadShow',
            fecha: '23/10/24',
            texto: t('Llega una nueva solución para que los comerciantes le cobren a los turistas brasileños.'),
            url: 'https://www.roadshow.com.ar/llega-una-nueva-solucion-para-que-los-comerciantes-le-cobren-a-los-turistas-brasilenos/',
        },
        {
            image: Entorno,
            medio: 'Entorno Económico',
            fecha: '23/10/24',
            texto: t('Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'),
            url: 'https://entornoeconomico.com/entorno-economico/megapix-llega-al-mercado-la-solucion-financiera-que-elimina-barreras-de-cambio-entre-argentina-y-brasil-202410238580',
        },
        {
            image: Jornada,
            medio: 'Jornada Online',
            fecha: '23/10/24',
            texto: t('Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'),
            url: 'https://jornadaonline.com/tag/megapix',
        },
        {
            image: EcoCuyo,
            medio: 'Eco Cuyo',
            fecha: '23/10/24',
            texto: t('Atención Mendoza: llega una plataforma que permite a los brasileños pagar por transferencia sus gastos en Argentina.'),
            url: 'https://ecocuyo.com/nota/147875/atencion-mendoza-llega-una-plataforma-que-permite-a-los-brasilenos-pagar-por-transferencia-sus-gastos-en-argentina/',
        },
        {
            image: Mnews,
            medio: 'M. News',
            fecha: '23/10/24',
            texto: t('Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'),
            url: 'https://mnews.com.ar/economia_negocios/112874-Megapix-llega-al-mercado-la-solucion-financiera-que-elimina-barreras-de-cambio-entre-Argentina-y-Brasil',
        },
        {
            image: LaPampa,
            medio: 'La Pampa 24',
            fecha: '23/10/24',
            texto: t('Lanzan plataforma tecnológica que permite a los brasileños pagar por transferencia sus gastos en Argentina.'),
            url: 'https://lapampa24.com.ar/negocios/lanzan-plataforma-tecnologica-que-permite-a-los-brasilenos-pagar-por-transferencia-sus-gastos-en-argentina/',
        },
        {
            image: NorteEnLinea,
            medio: 'Norte en línea',
            fecha: '23/10/24',
            texto: t('Megapix: llega al mercado la solución financiera que elimina barreras de cambio entre Argentina y Brasil.'),
            url: 'https://norteenlinea.com/megapix-llega-al-mercado-la-solucion-financiera-que-elimina-barreras-de-cambio-entre-argentina-y-brasil/',
        },
        {
            image: Ovrik,
            medio: 'Ovrik',
            fecha: '23/10/24',
            texto: t('Con Megapix, los comercios argentinos ya pueden cobrar en reales y recibir dólares digitales.'),
            url: 'https://www.ovrik.com/2024/10/23/megapix-cobrar-reales-recibir-dolares-argentina/#google_vignette',
        },
    ];

    const handleFilter = (medio) => {
        setSelectedMedium(medio);
        setVisibleCards(6); 
    };

    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };

    const filteredCards = cardsData.filter(card => selectedMedium === '' || card.medio === selectedMedium);
    
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
            <div className='contieneVolver'>
                <NavLink to="/" className='return' >
                    <KeyboardArrowLeftRoundedIcon />
                    {t("Volver al inicio")}
                </NavLink>
            </div>
            <div className='contenedorPrensaTotal'>
                <div className='prensaYbutton'>
                <h2 className='tituloPrensa'>{t('PRENSA')}</h2>
                
                {selectedMedium && (
                   <button
                   className='cargarMas'
                   title={t('Ver todas las notas')}
                   onClick={() => handleFilter('')}
               >
                <KeyboardArrowLeftRoundedIcon />
                   {t('Ver todas las notas')}
               </button>
                )}
</div>
                <div className='contenedorButtonNavPrensa'>
                    {['Forbes', 'IProUp', 'MDZ Online', 'Ámbito', 'Info Mendoza', 'Rede Argentina', 'Reportur', 'RoadShow', 'Entorno Económico', 'Jornada Online', 'Eco Cuyo', 'M. News', 'La Pampa 24', 'Norte en línea', 'Ovrik'].map(medio => (
                        <ButtonNav 
                            key={medio}
                            title={medio}
                            onClick={() => handleFilter(medio)}
                        />
                    ))}
                </div>

                <div className='filaPrensa'>
                    {filteredCards
                        .slice(0, visibleCards) 
                        .map(card => (
                            <CardPrensa 
                                image={card.image}
                                key={card.medio + card.fecha} 
                                medio={card.medio}
                                fecha={card.fecha}
                                texto={card.texto}
                                url={card.url}
                            />
                        ))}
                </div>
                
                {filteredCards.length > visibleCards && selectedMedium === '' && (
                    <button onClick={loadMoreCards} className='cargarMasOk'>
                        {t('Ver más')}
                    </button>
                )}
            </div>

            <Slogan />
        </section>
    );
};

export default Prensa;
