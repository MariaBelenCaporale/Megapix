import './styles.css';
import Phone from '@images/phone.png';
import PhoneBr from '@images/phoneBr.png';
import { useEffect, useState, useRef } from 'react';
import TuristOne from '../../screens/Turist/TuristOne/TuristOne';
import { useTranslation } from 'react-i18next';

const PhoneComponent = () => {
    const [transform, setTransform] = useState('scale(1) translateY(0)');
    const [phoneImage, setPhoneImage] = useState(Phone); 
    const coverRef = useRef(null);
    const turistOneRef = useRef(null);
    const { i18n } = useTranslation(); 


    useEffect(() => {
        if (i18n.language === 'br') {
            setPhoneImage(PhoneBr); 
        } else {
            setPhoneImage(Phone); 
        }
    }, [i18n.language]); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const turistOnePosition = turistOneRef.current?.getBoundingClientRect().top ?? 0;
            const touristOneHeight = turistOneRef.current?.offsetHeight ?? 0;

            const endTransformPoint = turistOnePosition + touristOneHeight - window.innerHeight;
            const windowWidth = window.innerWidth;

            let newScale = 1;
            let translateY = 0;

            if (windowWidth >= 1201) {
                newScale = 1.3;
                translateY = 0;
            } else if (windowWidth <= 390) {
                newScale = 1.2;
                translateY = 0;
            } else {
                newScale = Math.max(0.5, 1 - (scrollTop / endTransformPoint) * 0.5);
                translateY = Math.min(scrollTop / 2, touristOneHeight);
            }

            setTransform(`scale(${newScale}) translateY(${translateY}px)`);

            if (scrollTop > endTransformPoint) {
                setTransform(`scale(0.8) translateY(${touristOneHeight}px)`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className="containerPhone">
                <div className="cover">
                    <img
                        ref={coverRef}
                        src={phoneImage} 
                        alt='imagen de teléfono'
                        className="phoneimg"
                        style={{ transform: transform }}
                    />
                </div>
                <TuristOne />
            </section>
            
            <div ref={turistOneRef} />
        </>
    );
};

export default PhoneComponent;
