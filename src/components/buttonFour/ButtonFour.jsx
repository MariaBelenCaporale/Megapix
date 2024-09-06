import './styles.css';
import PropTypes from 'prop-types';
import Arrow from '@images/arrow.png';

const ButtonFour = ({ title, onClick, isActive }) => {
    return (
        <div className='containerButtonFour'>
            <button
                className={`buttonFour ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                <p className='textButtonFour'>{title}</p>
                <img className='arrowBtn' src={Arrow} alt='arrow' />
            </button>
        </div>
    );
};

ButtonFour.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool, 
};

export default ButtonFour;
