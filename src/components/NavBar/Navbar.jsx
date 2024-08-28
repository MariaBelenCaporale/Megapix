import './styles.css';
import Logo from '../../assets/logo-megapix.png';
import SwitchComponent from '../Switch/SwitchComponent';
import LanguageSelect from '../Languaje/LanguageSelect';

const NavBar = () => {
    return (
        <div className='containerNav'>
            <div className='containerLogo'>
            <img className='logo' src={Logo} alt="Logo Megapix" />
            <LanguageSelect />
            </div>
            <SwitchComponent />
            
        </div>
    );
};

export default NavBar;
