import "./styles.css";
import { NavLink } from "react-router-dom";
import Formas from "@images/formas.png";
import LogoFooter from "../../assets/logo-megapix.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

const Footer = ({ link }) => {
  const { t } = useTranslation();

  return (
    <div className="containerFooter">


      <div className="footer">
        <div className="footerOrder">
          <div className="containerLogoFooter">
            <img className="logoFooter" src={LogoFooter} />
            <p className="footerProduct">{t('Un producto de Polynomium®')}</p>
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
                <p className="textNavOne">{t('¿Quiénes somos?')}</p>
              </NavLink>

              <NavLink
                to="https://www.polynomium.com/"
                target="_blanck"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">{t('Ir a polynomium')}</p>
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">{t('Soporte & FAQs')}</p>
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">{t('Contacto')}</p>
              </NavLink>
            </div>
            <div className="columnOneFooter">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">{t('Política de privacidad')}</p>
              </NavLink>

              <NavLink
                to="/terminos"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink inactive"
                }
              >
                <p className="textNavThree">{t('Términos & condiciones')}</p>
              </NavLink>
            </div>
            </div>
            <span className="lineResponsive"></span>
            <div className="columnOneFooter">
              <p className="textNavComunidad">{t('Comunidad')}</p>
              <div className="columnOneFooterRed">
                <a href={link} className="red" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/company/megapixpay/posts/?feedView=all" className="red" target="_blank" rel="noreferrer">
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

Footer.propTypes = {
  link: PropTypes.string.isRequired,
}

export default Footer;
