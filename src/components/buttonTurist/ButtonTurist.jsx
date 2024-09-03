import './styles.css';
import PropTypes from 'prop-types';


const ButtonTurist = ({ title, onClick }) => {
    return (
        <button className='btnTuristOne' onClick={onClick}>
            {title}
        </button>
    )
}

ButtonTurist.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ButtonTurist;