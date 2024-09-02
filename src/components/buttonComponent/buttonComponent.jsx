import './styles.css';
import PropTypes from 'prop-types';

const ButtonComponent = ({ title }) => {
    return (
     
        <button className='buttonStyle'>
           {title}
        </button>
    
    )
};

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
};


export default ButtonComponent;