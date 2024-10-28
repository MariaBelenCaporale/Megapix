import './styles.css';
import PropTypes from 'prop-types';

const ButtonPrensa = ({ title, onclick }) => {
    return (
     
        <button className='buttonPrensa' onClick={onclick}>
           {title}
        </button>
    
    )
};

ButtonPrensa.propTypes = {
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
};


export default ButtonPrensa;