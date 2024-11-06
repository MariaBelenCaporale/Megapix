import './styles.css';
import Hero from "../components/HeroText/HeroText";
import Slogan from "../components/Slogan/Slogan";
// import Footer from "../components/Footer/Footer";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from "./SectionFive/SectionFive";
import SectionSix from "./SectionSix/SectionSix";
import SectionSeven from "./SectionSeven/SectionSeven";
import CoinOne from '@images/coinUno.png';
import CoinTwo from '@images/coinBlur.png';
import CoinOneIz from '@images/coinIzq.png';
import MegapixGlass from '@images/Megapix-Glass.png';
import CoinTwoIz from '@images/coinBlurIzq.png';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const CompanyScreen = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        i18n.changeLanguage('es');
        window.scrollTo(0, 0);
      }, [i18n]);

    return (
        <div className="containerCompany">
            <div className="containerHeroCompany">
                <Hero 
                    title={t('cobrá reales y recibí dólar digital ')}
                    titleColor={t('GRATIS')} 
                    fontFamily='Bebas Neue, sans-serif'
                    subtitle=
                    {t('Obtené tu cuenta y cuando desees, retirá en pesos o cripto.')} 
                />
                <div className="containerPixImg">
                    <img className="megapixHome" src={MegapixGlass} alt="Megapix Glass" />
                </div>
                <div className="coinContainer">
                    <img className="coinOne" src={CoinOne} alt="Moneda" />
                    <img className="coinTwo" src={CoinTwo} alt="Moneda" />
                    <img className="coinFour" src={CoinOneIz} alt="Moneda" />
                    <img className="coinThree" src={CoinTwoIz} alt="Moneda" />
                </div>
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <Slogan />
            {/* <Footer 
                link={'https://www.instagram.com/megapix_arg/'}
            /> */}
        </div>
    )
}

export default CompanyScreen;
