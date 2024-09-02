import { useState } from 'react';
import Pix from '../../images/pix.png';
import ButtonFour from '../../components/buttonFour/ButtonFour';
import ImgGroup from '../../images/grupoUno.png';
import './styles.css';

const SectionFour = () => {

    const [activeImage, setActiveImage] = useState(ImgGroup);

    const handleButtonClick = (image) => {
        setActiveImage(image);
    };

    return (
        <section className="sectionFour">
            <img className='pixImage' src={Pix} alt='pix' />
            <div className='cardFour'>
                <h2 className='titleFour'>Funcionalidades principales</h2>
                <div className='containerBtnFour'>
                    <ButtonFour title='Gestión de cobros diarios' onClick={() => handleButtonClick(ImgGroup)} />
                    <ButtonFour title='Gestión de billetera' onClick={() => handleButtonClick('')} />
                    <ButtonFour title='Gestión de ventas' onClick={() => handleButtonClick('')} />
                    <ButtonFour title='Gestión de tiendas' onClick={() => handleButtonClick('')} />
                    <ButtonFour title='Gestión de usuarios' onClick={() => handleButtonClick('')} />
                </div>
            </div>
            <div className='containerMoveImageFour'>
                <div className='moveImage'>
                    
                    {activeImage && <img className='imgGroup' src={activeImage} alt='funcionalidad' />}
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
