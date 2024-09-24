import Pizzas from '@images/pizzas.png';
import Viaje from '@images/viaje.png';
import Misiones from '@images/misiones.png';
import Bsas from '@images/bsas.png';
import Sur from '@images/sur.png';
import Obelisco from '@images/obelisco.png';
import Trabajar from '@images/trabajar.png';
import Ushuaia from '@images/ushuaia.png';
import Tienda from '@images/tienda.png';
import Subte from '@images/subte.png';
import Barilo from '@images/barilo.png';
import Asado from '@images/asado.png';
import Mendoza from '@images/mendoza.png';
import Norte from '@images/norte.png';
import Mate from '@images/mate.png'; 

import './styles.css';



const images = [Pizzas, Viaje, Misiones, Bsas, Sur, Obelisco, Trabajar, Ushuaia, Tienda, Subte, Barilo, Asado, Mendoza, Norte, Mate ]; 


const TuristOne = () => {
    return (
        <section className="turistOneContainer">
            <div className="containerCarousel">
                <div className="carouselInner">
                    {images.concat(images).map((src, index) => (
                        <div className="containerPlaces" key={index}>
                            <img className='imgPhoneOneTurist' src={src} alt={`Imagen ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TuristOne;
