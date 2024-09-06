import './styles.css';
import Ushuaia from '@images/ushuaia.png';
import Mendoza from '@images/mendoza.png';
import Bariloche from '@images/bariloche.png';
import Iguazu from '@images/iguazu.png';
import Nieve from '@images/nieve.png';
import Mdz from '@images/mdz.png';

const images = [Ushuaia, Mendoza, Bariloche, Iguazu, Nieve, Mdz];

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
