import ButtonComponent from '../buttonComponent/buttonComponent';
import './styles.css';
import PropTypes from 'prop-types';


const Hero = ({ title, subtitle}) => {
    return (
        <div className="container">
            <div className='containerBackground'>
                <h1 className="titleHero">{title}</h1>
                <p className='subtitleHero'>{subtitle}</p>
                <ButtonComponent title='Ir a la plataforma'/>
            </div>
        </div>
    )
};


Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Hero;