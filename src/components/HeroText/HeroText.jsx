import ButtonComponent from '../buttonComponent/buttonComponent';
import './styles.css';
import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, titleColor, fontFamily }) => {
    return (
        <div className="container">
            <div className='containerBackground'>
                <h1
                    className="titleHero"
                    style={{ fontFamily: fontFamily }}
                >
                    <span className="highlight" style={{ color: titleColor }}>
                        {titleColor}
                    </span>
                    {title}
                </h1>
                <p className='subtitleHero'>{subtitle}</p>
                <ButtonComponent title='Ir a la plataforma'/>
            </div>
        </div>
    )
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired,
    fontFamily: PropTypes.string // Nueva prop para la tipografía
};

export default Hero;
