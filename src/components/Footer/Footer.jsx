import "./styles.css";
import { NavLink } from "react-router-dom";
import Formas from "../../images/formas.png";
import Rayito from "../../images/rayo.png";
import LogoFooter from "../../assets/logo-megapix.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="sloganContainer">
        <div className="containerRayoFooter">
          <img className="rayito" src={Rayito} />
        </div>
        <h2 className="titleSlogan">Megapix, innovando el presente & futuro</h2>
      </div>

      <div className="footer">
        <div className="footerOrder">
          <div className="containerLogoFooter">
            <img className="logoFooter" src={LogoFooter} />
            <p className="footerProduct">Un producto de Polynomium® </p>
          </div>
          <div className="containerTotal">
            <div className="listResponsive">
            <div className="columnOneFooter">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavOne">¿Quiénes somos?</p>
                <p className="textNavTwo">
                  Creamos productos tecnológicos que desafían los paradigmas
                  establecidos.
                </p>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">Preguntas frecuentes</p>
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">Contacto</p>
              </NavLink>
            </div>
            <div className="columnOneFooter">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">Política de provacidad</p>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">Terminos & condiciones</p>
              </NavLink>
            </div>
            </div>
            <span className="lineResponsive"></span>
            <div className="columnOneFooter">
              <p className="textNavComunidad">Comunidad</p>
              <div className="columnOneFooterRed">
                <a href="" className="red" target="_blank">
                  <InstagramIcon />
                </a>
                <a href="" className="red" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="containerFormas">
          <img className="formas" src={Formas} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
