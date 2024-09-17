
import PropTypes from "prop-types";
import "./styles.css";



const CardDrag = ({ imageDrag, titleDrag, textDrag }) => {


  return (
    <div className="items">
      <div className="itemDrag">
        <div className="containerImgDrag">
          <img className="imgDrag" src={imageDrag} alt={titleDrag} />
        </div>
        <div className="containerInfoDrag">
          <h3 className="titleCardDrag">{titleDrag}</h3>
          <p className="subtitleCardDrag">{textDrag}</p>
        </div>
      </div>
    </div>
  );
};



CardDrag.propTypes = {
  titleDrag: PropTypes.string.isRequired,
  imageDrag: PropTypes.string.isRequired,
  textDrag: PropTypes.string.isRequired,
};

export default CardDrag;
