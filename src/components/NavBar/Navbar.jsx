import './styles.css';
import Logo from '../../assets/logo-megapix.png';
import SwitchComponent from '../Switch/SwitchComponent';
import LanguageSelect from '../Languaje/LanguageSelect';

const NavBar = () => {
    return (
        <div className='containerNav'>
            <div className='containerLogo'>
            <a href="#top">
                    <img className='logo' src={Logo} alt="Logo Megapix" />
                </a>
            </div>
            <SwitchComponent />
            <LanguageSelect />
        </div>
    );
};

export default NavBar;
