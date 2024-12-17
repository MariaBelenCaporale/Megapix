import { NavLink } from "react-router-dom";
import "./styles.css";


const PrensaComponent = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

  return (
    <NavLink to="/prensa" className="prensaIcon" onClick={handleButtonClick}>
      <p className="prensaTextNav">Prensa</p>
    </NavLink>
  );
};

export default PrensaComponent;
