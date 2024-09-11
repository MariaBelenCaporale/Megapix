import ButtonComponent from "../buttonComponent/buttonComponent";
import "./styles.css";
import PropTypes from "prop-types";

const HeroText = ({
  title,
  titleTwo,
  subtitle,
  titleColor,
  fontFamily,
  titleColorOne,
  titleColorTwo,
  showButton= true,
}) => {
  return (
    <div className="container">
      <div className="containerBackground">
        <h1 className="titleHero" style={{ fontFamily: fontFamily }}>
          <span className="lightBlue" style={{ color: titleColor }}>
            {titleColorOne} 
          </span>
          {title} 
          <span className="lightBlue" style={{ color: titleColor }}>
            {titleColor}
          </span>
        </h1>
        <h1 className="titleTwo" style={{ fontFamily: fontFamily }}>
          <span className="lightBlue" style={{ color: titleColor }}>
            {titleColorTwo} 
          </span>
           {titleTwo}
         
        </h1>
        <p className="subtitleHero">{subtitle}</p>
        {showButton && <ButtonComponent title="Visitar plataforma" />}
      </div>
    </div>
  );
};

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  titleColorOne: PropTypes.string.isRequired,
  prueba: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  titleColorTwo: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  showButton: PropTypes.bool,
};

export default HeroText;
