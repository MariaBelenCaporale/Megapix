import ButtonComponent from "../buttonComponent/buttonComponent";
import "./styles.css";
import PropTypes from "prop-types";

const HeroText = ({
  title,
  subtitle,
  titleColor,
  fontFamily,
  titleColorOne,
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
        <p className="subtitleHero">{subtitle}</p>
        {showButton && <ButtonComponent title="Ir a la plataforma" />}
      </div>
    </div>
  );
};

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
  titleColorOne: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  showButton: PropTypes.bool,
};

export default HeroText;
