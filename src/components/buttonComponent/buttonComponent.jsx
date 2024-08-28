import './styles.css';
import PropTypes from 'prop-types';

const ButtonComponent = ({ title }) => {
    return (
        <div className='containerButtonComponent'>
        <button className='buttonStyle'>
            <p className='textButton'>{title}</p>
        </button>
        </div>
    )
};

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
};


export default ButtonComponent;