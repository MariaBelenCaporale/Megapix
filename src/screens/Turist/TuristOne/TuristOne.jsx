import './styles.css';
import Ushuaia from '../../../images/ushuaia.png';
import Mendoza from '../../../images/mendoza.png';
import Bariloche from '../../../images/bariloche.png';
import Iguazu from '../../../images/iguazu.png';
import Ski from '../../../images/ski.png';
import Mdz from '../../../images/mdz.png';


const TuristOne = () => {
    

    return (
        <section className="turistOneContainer">
            <div className='containerCarousel'>
                <div className="containerPlaces">
                    <img className='imgPhoneOneTurist' src={Ushuaia} alt='Imagen de Ushuaia' />
                </div>
                <div className="containerPlaces">
                    <img className='imgPhoneOneTurist' src={Mendoza} alt='Imagen de Mendoza' />
                </div>
                <div className="containerPlaces">
                    <img src={Ushuaia} alt='Imagen de Ushuaia' />
                </div>
                <div className="containerPlaces">
                    <img className='imgPhoneOneTurist' src={Bariloche} alt='Imagen de Bariloche' />
                </div>
                <div className="containerPlaces">
                    <img  className='imgPhoneOneTurist'src={Iguazu} alt='Imagen de Iguazu' />
                </div>
                <div className="containerPlaces">
                    <img  className='imgPhoneOneTurist'src={Ski} alt='Imagen de persona haciendo ski' />
                </div>
                <div className="containerPlaces">
                    <img  className='imgPhoneOneTurist'src={Mdz} alt='Imagen de persona haciendo ski' />
                </div>
            </div>
        </section>
    );
};

export default TuristOne;
