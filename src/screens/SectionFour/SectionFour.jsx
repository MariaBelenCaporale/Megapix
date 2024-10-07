import { useState, useEffect, useMemo } from 'react';
import ButtonFour from '../../components/buttonFour/ButtonFour';
import Pix from '@images/pix.png';
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

const SectionFour = () => {
    const { t } = useTranslation();

    const [activeImage, setActiveImage] = useState('Gestión de cobros diarios');
    const [activeButton, setActiveButton] = useState('Gestión de cobros diarios');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesMap = useMemo(() => ({
        'Gestión de cobros diarios': [CobroUno, CobroDos],
        'Gestión de billetera': [Dinero, MisCuentas, Monedacard],
        'Gestión de tiendas': [GestionTiendas],
        'Gestión de usuarios': [Usuarios],
        'Gestión de ventas': [Ventas, VentasDos]
    }), []);

    useEffect(() => {
        const images = imagesMap[activeImage] || [];
        if (images.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [activeImage, imagesMap]);

    const handleButtonClick = (image, buttonTitle) => {
        setActiveImage(image);
        setActiveButton(buttonTitle);
        setCurrentImageIndex(0); 
    };

    return (
        <section className="sectionFour">
            <div className='containerTotalFour'>
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
                            title={t('Gestión de billetera')}
                            onClick={() => handleButtonClick('Gestión de billetera', 'Gestión de billetera')}
                            isActive={activeButton === 'Gestión de billetera'}
                        />
                        <ButtonFour
                            title={t('Gestión de ventas')}
                            onClick={() => handleButtonClick('Gestión de ventas', 'Gestión de ventas')}
                            isActive={activeButton === 'Gestión de ventas'}
                        />
                        <ButtonFour
                            title={t('Gestión de tiendas')}
                            onClick={() => handleButtonClick('Gestión de tiendas', 'Gestión de tiendas')}
                            isActive={activeButton === 'Gestión de tiendas'}
                        />
                        <ButtonFour
                            title={t('Gestión de usuarios')}
                            onClick={() => handleButtonClick('Gestión de usuarios', 'Gestión de usuarios')}
                            isActive={activeButton === 'Gestión de usuarios'}
                        />
                    </div>
                </div>

                <div className='containerMoveImageFour'>
                    <div className='moveImage'>
                        {activeImage === 'Gestión de cobros diarios' && (
                            <>
                                <img className={`imgOne ${currentImageIndex === 0 ? 'active' : 'hidden'}`} src={CobroUno} alt='Cobro Uno' />
                                <img className={`imgTwo ${currentImageIndex === 1 ? 'active' : 'hidden'}`} src={CobroDos} alt='Cobro Dos' />
                            </>
                        )}
                        {activeImage === 'Gestión de billetera' && (
                            <>
                                <img className={`imgThree ${currentImageIndex === 0 ? 'active' : 'hidden'}`} src={Dinero} alt='Dinero' />
                                <img className={`imgFour ${currentImageIndex === 1 ? 'active' : 'hidden'}`} src={MisCuentas} alt='Mis Cuentas' />
                                <img className={`imgFive ${currentImageIndex === 2 ? 'active' : 'hidden'}`} src={Monedacard} alt='Moneda Card' />
                            </>
                        )}
                        {activeImage === 'Gestión de tiendas' && (
                            <img className='imgSix active' src={GestionTiendas} alt='Gestión de Tiendas' />
                        )}
                        {activeImage === 'Gestión de usuarios' && (
                            <img className='imgSeven active' src={Usuarios} alt='Usuarios' />
                        )}
                        {activeImage === 'Gestión de ventas' && (
                            <>
                                <img className={`imgEight ${currentImageIndex === 0 ? 'active' : 'hidden'}`} src={Ventas} alt='Ventas' />
                                <img className={`imgNine ${currentImageIndex === 1 ? 'active' : 'hidden'}`} src={VentasDos} alt='Ventas Dos' />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
