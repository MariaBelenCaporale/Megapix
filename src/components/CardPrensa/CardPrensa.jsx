import PropTypes from 'prop-types';
import './styles.css';
import ButtonPrensa from '../../components/buttonPrensa/ButtonPrensa';

const CardPrensa = ({ medio, fecha, texto, url }) => {
    return (
        <div className='cardPrensa'>
            <div className='textosPrensaCard'>
            <h3 className='medioTitulo'>{medio}</h3>
            <p className='prensaFecha'>{fecha}</p>
            </div>
            <div className='textoPrensaTitulo'>
            <p className='prensaTexto'>{texto}</p>
            </div>
            <ButtonPrensa 
                title='Leer más'
                onclick={() => window.open(url, '_blank')}
            />
            
        </div>
    )
};

CardPrensa.propTypes = {
    medio: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default CardPrensa;
