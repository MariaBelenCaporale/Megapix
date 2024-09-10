import './styles.css';
import Ushuaia from '@images/ushuaia.png';
import Mendoza from '@images/mendoza.png';
import Bariloche from '@images/bariloche.png';
import Work from '@images/work.png';
import Iguazu from '@images/iguazu.png';
import iguazuOffice from '@images/iguazuOffice.png';
import Puente from '@images/puente.png';
import Nieve from '@images/nieve.png';
import PixCard from '@images/pixCard.png';
import Coffee from '@images/coffee.png';
import Wine from '@images/wine.png';
import PagoPix from '@images/pagoPix.png';
import Woman from '@images/woman.png';

const images = [Ushuaia, Mendoza, Bariloche, Work, iguazuOffice, Puente, PixCard, Coffee, Wine, PagoPix, Woman, Iguazu, Nieve]; 


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
