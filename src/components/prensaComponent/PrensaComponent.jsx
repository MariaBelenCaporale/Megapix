import { NavLink } from "react-router-dom";
import "./styles.css";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

const PrensaComponent = () => {

  return (
    <NavLink to="/prensa" className="prensaIcon">
      <CampaignRoundedIcon />
    </NavLink>
  );
};

export default PrensaComponent;
