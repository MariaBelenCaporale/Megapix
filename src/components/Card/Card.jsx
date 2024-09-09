import './styles.css';
import Rayo from "@images/rayo.png";

const Card = () => {
    return (
        <div className='containerCard'>
            <div className='card'>
                <div className='textCardFirst'>
                    <p className='textCard'>Más del 30% de los turistas que visitan Argentina son brasileños, y miles más residen y comercian en el país en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad y conectá tu negocio con ellos.
                    </p>
                    <p className='textCard'>Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional. </p>
                    <p className='textCard'>¡Descubrí cómo podemos transformar tu negocio!</p>
                </div>

                <div className='containerTextRight'>
                    <img className='rayoImg' src={Rayo} alt='Imagen de un rayo' />
                    <h2 className='tituloCard'>crecé sin fronteras</h2>
                </div>
            </div>
        </div>
    )
};

export default Card;