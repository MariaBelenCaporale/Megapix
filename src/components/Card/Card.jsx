import './styles.css';
import Rayo from "@images/rayo.png";

const Card = () => {
    return (
        <div className='containerCard'>
            <div className='card'>
                <div className='textCardFirst'>
                    <p className='textCard'>Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.
                    </p>
                    <p className='textCard'>Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.  </p>
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