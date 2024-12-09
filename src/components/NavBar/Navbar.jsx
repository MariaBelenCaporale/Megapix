import "./styles.css";
import Logo from "@images/logoNeon.png";
import SwitchComponent from "../Switch/SwitchComponent";
import LanguageSelect from "../Languaje/LanguageSelect";
import PrensaComponent from "../prensaComponent/PrensaComponent";


const NavBar = () => {
  return (
    <div className="containerNav">
      <div className="containerLogo">
        <a className="linkLogoNav" href="#top">
          <img className="logo" src={Logo} alt="Logo Megapix" />
        </a>
      </div>
      <SwitchComponent />
      <LanguageSelect />
      <PrensaComponent />
    </div>
  );
};

export default NavBar;
