import PropTypes from 'prop-types';
import './styles.css';
import Button from '../../components/buttonComponent/buttonComponent';

const CardPrensa = ({ medio, fecha, texto, click }) => {
    return (
        <div className='cardPrensa'>
            <h3 className='medioTitulo'>{medio}</h3>
            <p className='prensaFecha'>{fecha}</p>
            <p className='prensaTexto'>{texto}</p>
            <Button 
                title='Leer más'
                onclick={click}
            />
        </div>
    )
};

CardPrensa.propTypes = {
    medio: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default CardPrensa;
