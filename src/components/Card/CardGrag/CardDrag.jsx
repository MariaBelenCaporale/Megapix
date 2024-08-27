import './styles.css';
import PropTypes from 'prop-types';

const CardDrag = ({ title, subtitle, img }) => {
    return (
       
            <div className='cardDrag'>
                <div className='containerImgDrag'>
                <img className='imgDrag' src={img} /> 
                </div>
                <h3 className='titleCardDrag'>{title}</h3>
                <p className='subtitleCardDrag'>{subtitle}</p>
            </div>
       
    );
};

CardDrag.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired, 
};

export default CardDrag;
