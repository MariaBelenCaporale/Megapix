import './styles.css';
import PropTypes from 'prop-types';

const ButtonFour = ({ title }) => {
    return (
        <button className='buttonFour'>
            <p className='textButtonFour'>{title}</p>
            <img className='arrowBtn' src={''} />
        </button>
    )
};

ButtonFour.propTypes = {
    title: PropTypes.string.isRequired,
};


export default ButtonFour;