import PropTypes from 'prop-types';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './styles.css';

const ButtonFour = ({ title, onClick, isActive }) => {
    return (
        <div className='containerButtonFour'>
            <button
                className={`buttonFour ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                {title}
                <ArrowForwardRoundedIcon />
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
