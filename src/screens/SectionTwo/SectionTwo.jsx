import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./styles.css"; 

const SectionTwo = () => {
  const { t } = useTranslation();
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  const buttons = [
    t("Control de tus finanzas"),
    t("Cobros QR y Link de pago"),
    t("Conexión con turistas"),
    t("Multiplataforma"),
    t("Gratis"),
    t("Rápido"),
    t("Fácil"),
    t("Sin comisiones"),
    t("Seguridad"),
    t("Tecnología PIX"),
    t("Transacciones sin posnet"),
    t("Cobros sin barreras"),
    t("Segura"),
    t("Soporte 24/7"),
    t("Gestión de negocios"),
  ];

  return (
    <section className="containerSectionTwo">
      <div className="blurTwo">
        <h2 className="titleSectionTwo">
           {t('Ventajas de usar')} <span className="highlight"> {t('Megapix')}</span>
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
