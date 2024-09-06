import { useState } from 'react';
import Pix from '@images/pix.png';
import ButtonFour from '../../components/buttonFour/ButtonFour';
import GestionTiendas from '@images/gestionTiendas.png';
import Usuarios from '@images/usuarios.png';
import './styles.css';
import SwiperCard from '../../components/SwipperCard/SwipperCard';

const SectionFour = () => {
    const [activeImage, setActiveImage] = useState('');
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (image, buttonTitle) => {
        setActiveImage(image);
        setActiveButton(buttonTitle);
    };

    return (
        <section className="sectionFour">
            <img className='pixImage' src={Pix} alt='pix' />
            <div className='cardFour'>
                <h2 className='titleFour'>Funcionalidades principales</h2>
                <div className='containerBtnFour'>
                    <ButtonFour
                        title='Gestión de cobros diarios'
                        onClick={() => handleButtonClick('', 'Gestión de cobros diarios')}
                        isActive={activeButton === 'Gestión de cobros diarios'}
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de billetera'}
                        title='Gestión de billetera'
                        onClick={() => handleButtonClick('Gestión de billetera', 'Gestión de billetera')}
                        
                    />
                    <ButtonFour
                        title='Gestión de ventas'
                        onClick={() => handleButtonClick('', 'Gestión de ventas')}
                        isActive={activeButton === 'Gestión de ventas'}
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de tiendas'}
                        title='Gestión de tiendas'
                        onClick={() => handleButtonClick('Gestión de tiendas', 'Gestión de tiendas')}
                        
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de usuarios'}
                        title='Gestión de usuarios'
                        onClick={() => handleButtonClick("Gestión de usuarios", 'Gestión de usuarios')} 
                        
                    />
                </div>
            </div>
            <div className='containerMoveImageFour'>
                <div className='moveImage'>
                    {activeImage === 'Gestión de billetera' && (
                        <SwiperCard src={activeImage} />
                    ) }
                    {activeImage === 'Gestión de tiendas' && (
                        <img src={GestionTiendas}/>
                    ) }
                    {activeImage === 'Gestión de usuarios' && (
                        <img src={Usuarios}/>
                    ) }
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
