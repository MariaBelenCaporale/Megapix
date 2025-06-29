import PropTypes from "prop-types";
import "./styles.css";


const CardSelect = ({ text, title, image}) => {
  return (
    <div className="containerCardSelect">
      <div className="photoContainer">
      <img className="imgFoodSelect" src={image} alt="imagen de comida" />
      </div>
      <div className="containerTextSelect">
        <h2 className="titleSelect">{title}</h2>
        <p className="textSelect">
            {text}
        </p>
      </div>
    </div>
  );
};

CardSelect.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };



export default CardSelect;
