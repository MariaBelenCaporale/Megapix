import CardTerminos from "../../components/cardTerminos/CardTerminos";
import Footer from "../../components/Footer/Footer";
import Terminos from "../Terminos/Terminos";
import Logo from '@images/logoNeon.png';
import LanguageSelect from "../../components/Languaje/LanguageSelect";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import "./styles.css";
import { NavLink } from "react-router-dom";

const Condiciones = () => {
  return (
    <section className="containerSectionCond">
        <div className="containerNavCondiciones">
      <div className="containerLogo">
        <a className="linkLogoNav" href="/">
          <img className="logoCon" src={Logo} alt="Logo Megapix" />
        </a>
      </div>
      <LanguageSelect />
    </div>
    
      <div className="containerTotalCond">
        <CardTerminos />
        <div className="containerTotalTerminos">
        <div>
            <NavLink to="/" className='return' >
            <KeyboardArrowLeftRoundedIcon />
            Volver
            </NavLink>
        </div>
        <div className="containerTitleTerms">
              <h2 className="titleTerms">Términos y condiciones</h2>
            </div>
        <div className="terminos">
          <Terminos />
        </div>
       </div>
      </div>
      <Footer />
    </section>
  );
};

export default Condiciones;
