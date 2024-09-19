import CardDrag from '../../../components/Card/CardGrag/CardDrag';
import Transferencias from '@images/transferencias.png';
import Tecnologia from '@images/image4.png';
import Descuentos from '@images/plataforma-costo.png';
import Seguridad from '@images/seguridad.png';
import Soporte from '@images/soporte.png';
import Efectivo from '@images/efectivo.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import './styles.css';



const TuristFive = () => {
  const { t } = useTranslation();

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    return (
        <section className='containerTuristFive'>
            <div className='containerFiveTitle'>
                <h2 className="titleTuristFive">
                    {t('Ventajas de usar ')}<span className="highlight">{t('Megapix')}</span>
                </h2>
            </div>
            <div className='containerDragFive' ref={sliderRef}>
            <CardDrag 
          imageDrag={Transferencias}
          titleDrag={t('Transferencias al instante')}
          textDrag={t('Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.')}
        />
            <CardDrag 
          imageDrag={Tecnologia}
          titleDrag={t('Tecnología PIX')}
          textDrag={t('Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones')}
        />
            <CardDrag 
          imageDrag={Descuentos}
          titleDrag={t('Descuentos')}
          textDrag={t('Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos')}
        />
            <CardDrag 
          imageDrag={Seguridad}
          titleDrag={t('Seguridad')}
          textDrag={t('Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.')}
        />
            <CardDrag 
          imageDrag={Efectivo}
          titleDrag={t('Adios efectivo excesivo')}
          textDrag={t('Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!')}
        />
            <CardDrag 
          imageDrag={Soporte}
          titleDrag={t('Soporte')}
          textDrag={t('Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.')}
        />
            </div>
        </section>
    )
}

export default TuristFive;