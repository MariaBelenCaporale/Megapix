import './styles.css';
import Formas from '../../images/formas.png';
import Rayito from '../../images/rayo.png';
import LogoFooter from '../../assets/logo-megapix.png';

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="sloganContainer">
                <div className='containerRayoFooter'>
                <img className='rayito' src={Rayito} />
                </div>
                <h2 className='titleSlogan'>Megapix, innovando el presente & futuro</h2>
            </div>
            <div className='footer'>
                <div className='footerOrder'>
                    <img className='logoFooter' src={LogoFooter} />
                </div>
                <div className='containerFormas'>
            <img className='formas' src={Formas} />
           </div>
            </div>
            
        </div>
    )
}

export default Footer;