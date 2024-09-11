import Hero from "../../components/HeroText/HeroText";
import "./styles.css";
import TuristThree from "./TuristThree/TuristThree";
import TuristTwo from "./TuristTwo/TuristTwo";
import QrUno from "@images/qrUno.png";
import QrDos from "@images/qrDos.png";
import PixUno from "@images/pix-uno.png";
import PixDos from "@images/pix-dos.png";
import TuristFour from "./TuristFour/TuristFour";
import TuristFive from "./TuristFive/TuristFive";
import TuristSix from "./TuristSix/TuristSix";
import Footer from "../../components/Footer/Footer";
import SectionSeven from "../SectionSeven/SectionSeven";
import PhoneComponent from "../../components/Phone/Phone";
import Slogan from "../../components/Slogan/Slogan";

const TuristScreen = () => {
  return (
    <div className="containerTurist">
      <div className="containerHeroTurist">
        <Hero
          showButton={false}
          titleTwo="sin límites en Argentina"
          titleColorTwo="Pagá con pix "
          fontFamily="Poppins-Bold, sans-serif"
          subtitle="Viví experiencias únicas pagando como si estuvieses en casa"
        />
        <PhoneComponent />
        <div className="coinContainerTurist">
                    <img className="coinOneT" src={PixUno} alt="Moneda" />
                    <img className="coinTwoT" src={QrDos} alt="Moneda" />
                    <img className="coinThreeT" src={QrUno} alt="Moneda" />
                    <img className="coinFourT" src={PixDos} alt="Moneda" />
                </div>
        <div className="light"></div>
        <div className="light2"></div>
      </div> 

      <TuristTwo />
      <TuristThree />
      <TuristFour />
      <TuristFive />
      <TuristSix />
      <SectionSeven />
      <Slogan />
      <Footer />
    </div>
  );
};

export default TuristScreen;
