import { NavLink } from "react-router-dom";
import "./styles.css";
import { useTranslation } from "react-i18next";


const PrensaComponent = () => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

  return (
    <NavLink to="/prensa" className="prensaIcon" onClick={handleButtonClick}>
      <p className="prensaTextNav">{t('Prensa')}</p>
    </NavLink>
  );
};

export default PrensaComponent;
