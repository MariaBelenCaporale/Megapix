import Hero from "../../components/HeroText/HeroText";
import PhoneComponent from "../../components/Phone/Phone";
import Slogan from "../../components/Slogan/Slogan";
import TuristTwo from "./TuristTwo/TuristTwo";
import TuristThree from "./TuristThree/TuristThree";
import TuristFour from "./TuristFour/TuristFour";
import TuristFive from "./TuristFive/TuristFive";
import TuristSix from "./TuristSix/TuristSix";
import SectionSeven from "../SectionSeven/SectionSeven";
import QrUno from "@images/qrUno.png";
import QrDos from "@images/qrDos.png";
import PixUno from "@images/pix-uno.png";
import PixDos from "@images/pix-dos.png";
// import Footer from "../../components/Footer/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import "./styles.css";



const TuristScreen = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

useEffect(() => {
  i18n.changeLanguage('br'); 
  window.scrollTo(0, 0);
}, [i18n]);



  return (
    <div className="containerTurist">
      <div className="containerHeroTurist">
        <Hero
          showButton={false}
          titleTwo={t("y sentite como en casa")}
          titleColorTwo={t("Pagá con pix ")}
          fontFamily="Poppins-Bold, sans-serif"
          subtitle={t("Viví experiencias únicas pagando con Megapix en Argentina.")}
        />
    
        <div className="coinContainerTurist">
                    <img className="coinOneT" src={PixUno} alt="Moneda" />
                    <img className="coinTwoT" src={QrDos} alt="Moneda" />
                    <img className="coinThreeT" src={QrUno} alt="Moneda" />
                    <img className="coinFourT" src={PixDos} alt="Moneda" />

                <div className="light"></div>
                <div className="light2"></div>
          </div>
        <PhoneComponent />
        

      </div> 

      <TuristTwo />
      <TuristThree />
      <TuristFour />
      <TuristFive />
      <TuristSix />
      <SectionSeven />
      <Slogan />
      {/* <Footer 
        link={'https://www.instagram.com/megapix_bra/'}
      /> */}
    </div>
  );
};

export default TuristScreen;
