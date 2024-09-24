import CardDrag from "../../components/Card/CardGrag/CardDrag";
import Multiplataforma from '@images/Multiplataforma.png';
import Plataforma from '@images/plataforma-costo.png';
import Control from '@images/sucursales.png';
import Roles from '@images/roles.png';
import Soporte from '@images/soporte.png';
import Coin from '@images/coinUno.png';
import CobrosSeguros from '@images/cobros-seguros.png';
import Inmediatos from '@images/inmediato.png';
import Usdt from '@images/usdt.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import "./styles.css";

const SectionFive = () => {
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
  
  

  return (
    <section className="containerSectionFive">
      <div className="containerFive">
        <h2 className="titleFive">{t('Características & Beneficios')}</h2>
      </div>
      <div className="containerCoinFive">
        <img className="coinSectionFive" src={Coin} alt="Moneda megapix" />
      </div>

      <div className="containerCarousel">
      <button className="arrowButton left" onClick={() => handleScroll(-400)}><KeyboardArrowLeftRoundedIcon className="arrowCarousel"/></button> 
      <div className="containerDragCardFive" ref={sliderRef}>
    
      <CardDrag
          imageDrag={CobrosSeguros}
          titleDrag={t('Cobros seguros')}
          textDrag={t('Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.')}
        />
        <CardDrag 
          imageDrag={Multiplataforma}
          titleDrag={t('Multiplataforma')}
          textDrag={t('Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.')}
        />
        <CardDrag
          imageDrag={Control}
          titleDrag={t('Control de sucursales')}
          textDrag={t('Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).')}
        />
        <CardDrag 
          imageDrag={Roles}
          titleDrag={t('Roles y permisos')}
          textDrag={t('Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.')}
        /> 
        <CardDrag 
          imageDrag={Plataforma}
          titleDrag={t('Plataforma sin costo')}
          textDrag={t('Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.')}
        /> 
        <CardDrag 
          imageDrag={Inmediatos}
          titleDrag={t('Pagos inmediatos')}
          textDrag={t('Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.')}
        /> 
        <CardDrag 
          imageDrag={Soporte}
          titleDrag={t('Soporte 24/7')}
          textDrag={t('Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.')}
        /> 
        <CardDrag 
          imageDrag={Usdt}
          titleDrag={t('Dólar digital (USDT)')}
          textDrag={t('El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!')}
        /> 
          
      </div>
      <button className="arrowButton right" onClick={() => handleScroll(400)}><KeyboardArrowRightRoundedIcon className="arrowCarousel"/></button>
      </div>
    </section>
  );
};

export default SectionFive;
