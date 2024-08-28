import './styles.css';
import PropTypes from 'prop-types';
import Arrow from '../../images/arrow.png';

const ButtonFour = ({ title }) => {
    return (
        <div className='containerButtonFour'>
        <button className='buttonFour'>
            <p className='textButtonFour'>{title}</p>
            <img className='arrowBtn' src={Arrow} />
        </button>
        </div>
    )
};

ButtonFour.propTypes = {
    title: PropTypes.string.isRequired,
};


export default ButtonFour;