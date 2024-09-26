import CardDrag from '../../../components/Card/CardGrag/CardDrag';
import Inmediatos from '@images/inmediatos.png';
import TecnologiaTurista from '@images/tecnologiaTurista.png';
import Soporte from '@images/soporte.png';
import SeguridadTurist from '@images/seguridadTurist.png';
import DescuentosTurist from '@images/descuentosTurist.png';
import EfectivoTurist from '@images/efectivoTurist.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import './styles.css';



const TuristFive = () => {
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);




  useEffect(() => {
    const slider = sliderRef.current;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      slider.classList.add("active");
    };

    const onMouseUp = () => {
      setIsDragging(false);
      slider.classList.remove("active");
    };

    const onMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        slider.classList.remove("active");
      }
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; 
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleScroll = (amount) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + amount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 800, 
        behavior: 'auto',
      });
    }
  }, []);

    return (
        <section className='containerTuristFive'>
            <div className='containerFiveTitle'>
                <h2 className="titleTuristFive">
                    {t('Ventajas de usar ')}<span className="highlight">{t('Megapix')}</span>
                </h2>
            </div>

            <div className='containerCarouselTurist'>
            <button className="arrowButton left" onClick={() => handleScroll(-400)}><KeyboardArrowLeftRoundedIcon className="arrowCarousel"/></button> 
            

            <div className='containerDragFive' ref={sliderRef}>
            <CardDrag 
          imageDrag={Inmediatos}
          titleDrag={t('Pagos inmediatos')}
          textDrag={t('Con Megapix vas a poder pagar con tu banco o billetera de preferencia sin necesidad de descargar una aplicación, de manera rápida y sencilla. Las transferencias son instantáneas, sin demoras ni complicaciones.')}
        />
            <CardDrag 
          imageDrag={TecnologiaTurista}
          titleDrag={t('Tecnología PIX')}
          textDrag={t('En Megapix, utilizamos la misma tecnología desarrollada y respaldada por el Banco Central de Brasil. Disfrutá de Argentina como si estuvieras en casa.')}
        />
            <CardDrag 
          imageDrag={SeguridadTurist}
          titleDrag={t('Seguridad')}
          textDrag={t('Nuestros comercios y empresas adheridas cuentan con un proceso riguroso de aprobación y validación de sus datos por lo que tus pagos y datos siempre van a estar protegidos. En Megapix te cuidamos con nuestra tecnología de vanguardia, brindandote total tranquilidad.')}
        />
            <CardDrag 
          imageDrag={EfectivoTurist}
          titleDrag={t('Adios efectivo excesivo')}
          textDrag={t('Despedíte de las complicaciones del efectivo en mano. Ahora vas a poder pagar al instante, directamente desde tu cuenta, sin preocuparte por llevar el cambio en efectivo. ¡Disfruta de tu viaje con total libertad y seguridad!')}
        />
            <CardDrag 
          imageDrag={DescuentosTurist}
          titleDrag={t('Descuentos exclusivos')}
          textDrag={t('Aprovechá de los mejores descuentos pagando con Megapix en todos los comercios adheridos. ¿Qué estas esperando? ¡Disfrutá al máximo cada experiencia!')}
        />
            <CardDrag 
          imageDrag={Soporte}
          titleDrag={t('Soporte 24/7')}
          textDrag={t('Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días. ¡No dudes en contactarnos!')}
        />
            </div>
            <button className="arrowButton right" onClick={() => handleScroll(400)}><KeyboardArrowRightRoundedIcon className="arrowCarousel"/></button>
            </div>
        </section>
    )
}

export default TuristFive;