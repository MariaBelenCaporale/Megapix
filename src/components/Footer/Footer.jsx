import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/logo-megapix.png";
import Formas from "@images/formas.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import "./styles.css";


const Footer = ({ link }) => {
  const { t } = useTranslation();
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleScrollToFAQs = (event) => {
    event.preventDefault(); 
    const section = document.getElementById('faqs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <div className="containerFooter">
      <div className="footer">
        <div className="footerOrder">
          <div className="containerLogoFooter">
            <a href="#top">
              <img className='logoFooter' src={LogoFooter} alt="Logo Megapix" />
            </a>
            <p className="footerProduct">{t('Un producto de Polynomium®')}</p>
          </div>

          <div className="containerTotal">
            <div className="listResponsive">
              <div className="columnOneFooter">


                <NavLink
                  to="https://www.polynomium.com/"
                  target="_blank"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToTop} 
                >
                  <p className="textNavThree">{t('Ir a polynomium')}</p>
                </NavLink>

                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToFAQs} 
                >
                  <p className="textNavThree">{t('Soporte & FAQs')}</p>
                </NavLink>
                <NavLink
                  to="/terminos"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToTop} 
                >
                  <p className="textNavThree">{t('Política de privacidad')}</p>
                </NavLink> 
              </div>

              <div className="columnOneFooter">


                <NavLink
                  to="/terminos"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToTop} 
                >
                  <p className="textNavThree">{t('Términos & condiciones')}</p>
                </NavLink>
                <NavLink
                  to="/prensa"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToTop} 
                >
                  <p className="textNavThree">{t('Prensa')}</p>
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={handleScrollToTop} 
                >
                  <p className="textNavThree">{t('Contacto')}</p>
                </NavLink>
              </div>
            </div>
          </div>
          <span className="lineResponsive"></span>
          <div>
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
};

export default Footer;
