import { useRef, useState, useEffect } from "react";
import Multiplataforma from '../../../images/Multiplataforma.png';
import Control from '../../../images/sucursales.png';
import Roles from '../../../images/roles.png';
import Plataforma from '../../../images/plataforma-costo.png';
import Transferencias from '../../../images/transferencias.png';
import Soporte from '../../../images/soporte.png';
import "./styles.css";

const CardDrag = () => {
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
      setIsDragging(false);
      slider.classList.remove("active");
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
    <div className="containerDragCard">
      <div className="items" ref={sliderRef}>
        <div className="itemDrag item1">
          <div className="containerImgDrag">
            <img className="imgDrag" src={Multiplataforma} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Multiplataforma</h3>
            <p className="subtitleCardDrag">
              Podrás acceder y utilizar la plataforma desde la página web
              mediante todos los dispositivos que estén conectados a Internet
              (Celular, Tablet y Computadora)
            </p>
          </div>
        </div>
        <div className="itemDrag item1">
          <div className="containerImgDrag">
            <img className="imgDrag" src={Multiplataforma} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Seguridad en cada cobro</h3>
            <p className="subtitleCardDrag">
            Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.
            </p>
          </div>
        </div>
        <div className="itemDrag item2">
          <div className="containerImgDrag">
            <img className="imgDrag" src={Control} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Control de sucursales </h3>
            <p className="subtitleCardDrag">
              Podrás adherir todas las sucursales que estén asociadas a tu CUIT
              único y visualizar el historial de movimientos de cada una.
              (Acciones limitadas a los roles asignados)
            </p>
          </div>
        </div>
        <div className="itemDrag item3">
          <div className="containerImgDrag">
            <img className="imgDrag" src={Roles} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Roles y permisos</h3>
            <p className="subtitleCardDrag">
            Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.
            </p>
          </div>
        </div>
        <div className="itemDrag item4">
        <div className="containerImgDrag">
            <img className="imgDrag" src={Plataforma} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Plataforma sin costo</h3>
            <p className="subtitleCardDrag">
            Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.
            </p>
          </div>
        </div>
        <div className="itemDrag item5">
        <div className="containerImgDrag">
            <img className="imgDrag" src={Transferencias} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Transferencias al 
            instante</h3>
            <p className="subtitleCardDrag">
            Recibí tus cobros al instante de manera facil y segura
            </p>
          </div>
        </div>
        <div className="itemDrag item6">
        <div className="containerImgDrag">
            <img className="imgDrag" src={Soporte} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Soporte</h3>
            <p className="subtitleCardDrag">
            Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardDrag;
