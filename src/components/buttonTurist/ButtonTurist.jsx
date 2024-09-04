import './styles.css';
import PropTypes from 'prop-types';

const ButtonTurist = ({ title, onClick, isActive }) => {
    return (
        <button
            className={`btnTuristOne ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

ButtonTurist.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default ButtonTurist;
