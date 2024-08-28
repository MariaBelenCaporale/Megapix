import { useEffect, useState } from 'react';
import './styles.css';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import ImageA from '../../images/image1.png';
import ImageB from '../../images/image2.png';
import ImageC from '../../images/image3.png';
import ImageD from '../../images/image4.png';
import ImageE from '../../images/image5.png';
import ImageF from '../../images/image6.png';

const images = [ImageA, ImageB, ImageC];
const imagesTwo = [ImageD, ImageE, ImageF];

const SectionSix = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImages, setCurrentImages] = useState(images);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => {
                const nextImage = (prevImage + 1) % currentImages.length;
                if (nextImage === 0) {
                    setCurrentImages(currentImages === images ? imagesTwo : images);
                }
                return nextImage;
            });
        }, 2000); 

        return () => clearInterval(interval);
    }, [currentImages]);

    return (
        <section className='sectionSix'>
            <div className='containerTextSix'>
                <p className='itemSix'>ESTÁS LISTO?</p>
                <h2 className='titleSectionSix'>COMENCEMOS</h2>
                <p className='subtitleSectionSix'>Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix. </p>
                <ButtonComponent title='Ir a la plataforma' />
            </div>
            <div className='containerVideosSix'>
                <div className='containerVideo'>
                    {currentImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            className={`img${String.fromCharCode(65 + index)} ${currentImage === index ? 'rotate' : 'reverseRotate'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionSix;
