import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Brasil from '../../images/Brasil.jpg';
import Argentina from '../../images/argentina.png';
import './styles.css';

const LanguageSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Español');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const languageFlags = {
        'Portugués': Brasil,
        'Español': Argentina,
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setDropdownOpen(false); 
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const selectedFlag = languageFlags[selectedLanguage];

    return (
        <div className='containerLanguage'>
            <div className='selectedLanguage' onClick={toggleDropdown}>
                <KeyboardArrowDownRoundedIcon sx={{ color: 'white', marginLeft: '8px' }} />
                <img className='flag' src={selectedFlag} alt={selectedLanguage} />
                <p className='idioms'>{selectedLanguage}</p>
                
            </div>
            {isDropdownOpen && (
                <div className='dropdownMenu'>
                    <div className='containerFlag' onClick={() => handleLanguageChange('Portugués')}>
                        <img className='flag' src={Brasil} alt="Portugués" />
                        <p className='idioms'>Portugués</p>
                    </div>
                    <div className='containerFlag' onClick={() => handleLanguageChange('Español')}>
                        <img className='flag' src={Argentina} alt="Español" />
                        <p className='idioms'>Español</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSelect;
