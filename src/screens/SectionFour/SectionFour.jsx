import { useState } from 'react';
import Pix from '@images/pix.png';
import ButtonFour from '../../components/buttonFour/ButtonFour';
import GestionTiendas from '@images/gestionTiendas.png';
import Usuarios from '@images/usuarios.png';
import Dinero from '@images/dinero.png';
import MisCuentas from '@images/mis-cuentas.png';
import CobroUno from '@images/cobrosUno.png';
import CobroDos from '@images/cobrosDos.png';
import Ventas from '@images/ventas.png';
import VentasDos from '@images/ventasDos.png';
import Monedacard from '@images/monedacard.png';
import { useTranslation } from 'react-i18next';
import './styles.css';
import SwiperCard from '../../components/SwipperCard/SwipperCard';

const SectionFour = () => {
    const { t } = useTranslation();

    const [activeImage, setActiveImage] = useState('Gestión de cobros diarios');
    const [activeButton, setActiveButton] = useState('Gestión de cobros diarios');

    const handleButtonClick = (image, buttonTitle) => {
        setActiveImage(image);
        setActiveButton(buttonTitle);
    };

    return (
        <section className="sectionFour">
            <img className='pixImage' src={Pix} alt='pix' />
            <div className='cardFour'>
                <h2 className='titleFour'>{t('Funcionalidades principales')}</h2>
                <div className='containerBtnFour'>
                    <ButtonFour
                        title={t('Gestión de cobros diarios')}
                        onClick={() => handleButtonClick('Gestión de cobros diarios', 'Gestión de cobros diarios')}
                        isActive={activeButton === 'Gestión de cobros diarios'}
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de billetera'}
                        title={t('Gestión de billetera')}
                        onClick={() => handleButtonClick('Gestión de billetera', 'Gestión de billetera')}
                        
                    />
                    <ButtonFour
                        title={t('Gestión de ventas')}
                        onClick={() => handleButtonClick('Gestión de ventas', 'Gestión de ventas')}
                        isActive={activeButton === 'Gestión de ventas'}
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de tiendas'}
                        title={t('Gestión de tiendas')}
                        onClick={() => handleButtonClick('Gestión de tiendas', 'Gestión de tiendas')}
                        
                    />
                    <ButtonFour
                    isActive={activeButton === 'Gestión de usuarios'}
                        title={t('Gestión de usuarios')}
                        onClick={() => handleButtonClick("Gestión de usuarios", 'Gestión de usuarios')} 
                        
                    />
                </div>
            </div>
            <div className='containerMoveImageFour'>
                <div className='moveImage'>
                    {activeImage === 'Gestión de billetera' && (
                        <SwiperCard imagen={Dinero} imagenUno={MisCuentas} imagenDos={Monedacard} />
                    ) }
                    {activeImage === 'Gestión de tiendas' && (
                       <SwiperCard imagen={GestionTiendas} />
                    ) }
                    {activeImage === 'Gestión de usuarios' && (
                        <SwiperCard imagenTres={Usuarios}  />
                    ) }
                    {activeImage === 'Gestión de cobros diarios' && (
                        <SwiperCard imagen={CobroDos} imagenUno={CobroUno} />
                    ) }
                    {activeImage === 'Gestión de ventas' && (
                        <SwiperCard imagen={Ventas} imagenTres={VentasDos} />
                    ) }
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
