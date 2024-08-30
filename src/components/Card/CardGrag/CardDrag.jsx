import { useRef, useState, useEffect } from "react";
import ImgPix from '../../../images/image3.png';
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
            <img className="imgDrag" src={ImgPix} />
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
        <div className="itemDrag item2">
          <div className="containerImgDrag">
            <img className="imgDrag" src={ImgPix} />
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
            <img className="imgDrag" src={ImgPix} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Roles y permisos</h3>
            <p className="subtitleCardDrag">
            Megapix ofrece un sistema de administration de equipo donde podrás llevar el control de todas las tareas realizadas dentro de la plataforma
            </p>
          </div>
        </div>
        <div className="itemDrag item4">
        <div className="containerImgDrag">
            <img className="imgDrag" src={ImgPix} />
          </div>
          <div className="containerInfoDrag">
            <h3 className="titleCardDrag">Plataforma sin costo</h3>
            <p className="subtitleCardDrag">
            Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza. 
            </p>
          </div>
        </div>
        <div className="itemDrag item5">
        <div className="containerImgDrag">
            <img className="imgDrag" src={ImgPix} />
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
            <img className="imgDrag" src={ImgPix} />
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
