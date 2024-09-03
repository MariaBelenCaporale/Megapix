import Hero from "../../components/HeroText/HeroText";
import TuristOne from "./TuristOne/TuristOne";
import "./styles.css";
import TuristThree from "./TuristThree/TuristThree";
import TuristTwo from "./TuristTwo/TuristTwo";
import QrUno from "../../images/qrUno.png";
import QrDos from "../../images/qrdos.png";
import PixUno from "../../images/pix-uno.png";
import PixDos from "../../images/pix-dos.png";
import TuristFour from "./TuristFour/TuristFour";
import TuristFive from "./TuristFive/TuristFive";
import TuristSix from "./TuristSix/TuristSix";
import Footer from '../../components/Footer/Footer';
import SectionSeven from '../SectionSeven/SectionSeven';

const TuristScreen = () => {
  return (
    <div className="containerTurist">
      <div className="containerHeroTurist">
        <Hero
          title="sin límites en Argentina"
          titleColorOne="Pagá con pix "
          fontFamily="Poppins-Bold, sans-serif"
          subtitle="Viví experiencias únicas pagando como si estuvieses en casa"
        />
        <div className="containerCoinUno">
          <img className="coinOne" src={PixUno} alt="Moneda" />
          <img className="coinTwo" src={QrDos} alt="Moneda" />
        </div>

        <div className="containerCoinDos">
          <img className="coinThree" src={QrUno} alt="Moneda" />
          <img className="coinFour" src={PixDos} alt="Moneda" />
        </div>
        <div className="light"></div>
        <div className="light2"></div>
      </div>
      <TuristOne />
      <TuristTwo />
      <TuristThree />
      <TuristFour />
      <TuristFive />
      <TuristSix />
      <SectionSeven />
      <Footer />
    </div>
  );
};

export default TuristScreen;
