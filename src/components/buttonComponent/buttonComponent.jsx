import './styles.css';
import PropTypes from 'prop-types';

const ButtonComponent = ({ title, onClick }) => {
    return (
        <button className='buttonStyle' onClick={onClick}>
            {title}
        </button>
    );
};

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
