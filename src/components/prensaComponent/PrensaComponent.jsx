import { NavLink } from "react-router-dom";
import "./styles.css";


const PrensaComponent = () => {

  return (
    <NavLink to="/prensa" className="prensaIcon">
      <p className="prensaTextNav">Prensa</p>
    </NavLink>
  );
};

export default PrensaComponent;
