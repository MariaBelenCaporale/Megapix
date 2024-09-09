import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const CardDrag = ({ imageDrag, titleDrag, textDrag }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      slider.classList.add("active");
    };

    const onMouseUp = () => {
      setIsDragging(false);
      slider.classList.remove("active");
    };

    const onMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        slider.classList.remove("active");
      }
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; 
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (

      <div className="items" ref={sliderRef}>
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
