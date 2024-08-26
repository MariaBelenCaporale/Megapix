import Hero from "../components/HeroText/HeroText";
import './styles.css';
import CoinOne from '../images/coinUno.png';
import CoinTwo from '../images/coinBlur.png';
import CoinOneIz from '../images/coinIzq.png';
import CoinTwoIz from '../images/coinBlurIzq.png';
import SectionOne from "./SectionOne/SectionOne";
import TextMove from "../components/TextMove/TextMove";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import MegapixGlass from '../images/Megapix-Glass.png';
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from "./SectionFive/SectionFive";


const CompanyScreen = () => {
    return (
        <div className="containerCompany">
            <div className="containerHeroCompany">
                <Hero 
                    titleColor="potenciá tu negocio,"
                    title=' cobrá reales y recibí dólar digital ' 
                    subtitle='Obtené tu cuenta y cuando desees retirá en pesos o cripto.'
                />
                <div className="containerPixImg">
                <img className="megapixHome" src={MegapixGlass} />
                </div>
                <div className="containerCoinUno">
                    <img className="coinOne" src={CoinOne} alt="Moneda" />
                    <img className="coinTwo" src={CoinTwo} alt="Moneda" />
                </div>

                <div className="containerCoinDos">
                    <img className="coinThree" src={CoinTwoIz} alt='Moneda' />
                    <img className="coinFour" src={CoinOneIz} alt="Moneda" />
                </div>
            </div>

            <SectionOne />
            <TextMove />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            
        </div>
    )
}

export default CompanyScreen;