import './styles.css';

const CardTurist = () => {
    return (
        <div className='turismCardOne'>
        <div className='orderCardTur'>
            <div className='cardTurOne'>
                <h3 className='titleCardTurOne'>Vacacionar</h3>
            </div>
            <div className='cardTurOne'>
                <h3 className='titleCardTurOne'>Estudiar</h3>
            </div>
            <div className='cardTurOne'>
                <h3 className='titleCardTurOne'>Vivir</h3>
            </div>
            <div className='cardTurOne'>
                <h3 className='titleCardTurOne'>Visitar familia</h3>
            </div>
            <div className='cardTurOne'>
                <h3 className='titleCardTurOne'>Trabajar</h3>
            </div>
        </div>
        <div className='containerCardNext'>
            <div className='askTitle'> 
                <h2 className='askCardTur'>¿Por qué elegirnos?</h2>
            </div>
            <div className='textTurOne'>
                <p className='textCardTur'>Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.</p>
            </div>
        </div>
        </div>
    )
};

export default CardTurist;