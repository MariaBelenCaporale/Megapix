
import  { useRef, useEffect } from 'react';
import Card from '../../components/Card/Card';
import './styles.css'; 
import TextMove from '../../components/TextMove/TextMove';
import { useTranslation } from 'react-i18next';



const SectionOne = () => {
  const { t } = useTranslation();
  
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      const scrollStart = sectionTop + sectionHeight * 0.0;
      const scrollEnd = sectionTop + sectionHeight * 0.55;

      if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const scrollProgress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const backgroundPosition = -500 + scrollProgress * 1000;
        textRef.current.style.backgroundPosition = `${backgroundPosition}% 0`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='containerSectionOne'>
      <h2 className='titleSectionOne' ref={textRef}>
      {t('Potenciá tu negocio')} 
      </h2>
      <div className='sectionWrapper' ref={sectionRef}>
        <div className='cardWrapper'>
        
        </div>
        <Card />
        <TextMove />
      </div>
      
    </section>
  );
};

export default SectionOne;




