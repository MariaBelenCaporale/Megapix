import { useState } from "react";
import "./styles.css";

const SectionTwo = () => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  const buttons = [
    "Control de tus finanzas",
    "Cobros QR y Link de pago",
    "Conexión con turistas",
    "Gratis",
    "Multiplataforma",
    "Rápido",
    "Fácil",
    "Sin comisiones",
    "Seguridad",
    "Tecnología PIX",
    "Transacciones sin posnet",
    "Cobros sin barreras",
    "Segura",
    "Soporte 24/7",
    "Gestión de negocios",
  ];

  return (
    <section className="containerSectionTwo">
      <div className="blurTwo">
        <h2 className="titleSectionTwo">
          Ventajas de usar <span className="highlight">Megapix</span>
        </h2>
      </div>
      <div className="prueba" >
        <div className="rotated-items-container">
        {buttons.map((text, index) => (
            <button
              key={index}
              className={`animation animation-${index + 1} ${selectedButton === index ? 'selected' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
