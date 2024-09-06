import './styles.css';
import Rayito from '@images/rayo.png';

const Slogan = () => {
    return (
        <div className="sloganContainer">
            <div className="containerRayoFooter">
            <img className="rayito" src={Rayito} />
            </div>
            <div className='titleSloganContainer'>
            <h2 className="titleSlogan">Megapix, innovando el presente & futuro</h2>
            </div>
      </div>
    )
}

export default Slogan;