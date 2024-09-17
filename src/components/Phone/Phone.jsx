import './styles.css';
import Phone from '@images/phoneEsp.png';
import { useEffect, useState, useRef } from 'react';
import TuristOne from '../../screens/Turist/TuristOne/TuristOne';



const PhoneComponent = () => {
    const [transform, setTransform] = useState('scale(1) translateY(0)');
    const coverRef = useRef(null);
    const turistOneRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const turistOnePosition = turistOneRef.current?.getBoundingClientRect().top ?? 0;
            const touristOneHeight = turistOneRef.current?.offsetHeight ?? 0;

            const endTransformPoint = turistOnePosition + touristOneHeight - window.innerHeight;

   
            const newScale = Math.max(0.5, 1 - (scrollTop / endTransformPoint) * 0.5);
            const translateY = Math.min(scrollTop / 2, touristOneHeight); 

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
                        src={Phone}
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
