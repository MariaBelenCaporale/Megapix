// import { useState } from "react";
// import { useTranslation } from 'react-i18next';
// import "./styles.css"; 

// const SectionTwo = () => {
//   const { t } = useTranslation();
//   const [selectedButton, setSelectedButton] = useState(null)

//   const handleButtonClick = (index) => {
//     setSelectedButton(index);
//   };
//   const buttons = [
//     t("Control de tus finanzas"),
//     t("Cobros QR"),
//     t("Link de pago"),
//     t("Conexión con turistas"),
//     t("Multiplataforma"),
//     t("Gratis"),
//     t("Rápido"),
//     t("Fácil"),
//     t("Sin comisiones"),
//     t("Seguridad"),
//     t("Tecnología PIX"),
//     t("Pagos inmediatos"),
//     t("Cobros sin barreras"),
//     t("Segura"),
//     t("Soporte 24/7"),
//     t("Gestión de negocios"),
//   ];

//   return (
//     <section className="containerSectionTwo">
//       <div className="blurTwo">
//         <h2 className="titleSectionTwo">
//            {t('Ventajas de usar')} <span className="highlight"> {t('Megapix')}</span>
//         </h2>
//       </div>
//       <div className="prueba" >
//         <div className="rotated-items-container">
//         {buttons.map((text, index) => (
//             <button
//               key={index}
//               className={`animation animation-${index + 1} ${selectedButton === index ? 'selected' : ''}`}
//               onClick={() => handleButtonClick(index)}
//             >
//               {text}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionTwo;

import { useTranslation } from 'react-i18next';
import "./styles.css"; 

const SectionTwo = () => {
  const { t } = useTranslation();
  // const [selectedButton, setSelectedButton] = useState(null)

  // const handleButtonClick = (index) => {
  //   setSelectedButton(index);
  // };
  // const buttons = [
  //   t("Control de tus finanzas"),
  //   t("Cobros QR"),
  //   t("Link de pago"),
  //   t("Conexión con turistas"),
  //   t("Multiplataforma"),
  //   t("Gratis"),
  //   t("Rápido"),
  //   t("Fácil"),
  //   t("Sin comisiones"),
  //   t("Seguridad"),
  //   t("Tecnología PIX"),
  //   t("Pagos inmediatos"),
  //   t("Cobros sin barreras"),
  //   t("Segura"),
  //   t("Soporte 24/7"),
  //   t("Gestión de negocios"),
  // ];

  return (
    <section className="containerSectionTwo">
      <div className="blurTwo">
        <h2 className="titleSectionTwo">
           {t('Ventajas de usar')} <span className="highlight"> {t('Megapix')}</span>
        </h2>
      </div>
      <div className="prueba" >
        <div className="rotated-items-container">
          <div className='columnOne'>
          <button className={'animation' }>{t("Control de tus finanzas")}</button>
          <button className={'animation' }>{t("Cobros QR")}</button>
          <button className={'animation' }>{t("Link de pago")}</button>
          <button className={'animation' }>{t("Conexión con turistas")}</button>
          </div>
          <div className='columnOne'>
          <button className={'animation' }>{t("Multiplataforma")}</button>
          <button className={'animation' }>{t("Rápido")}</button>
          <button className={'animation' }>{t("Gratis")}</button>
          <button className={'animation' }>{t("Fácil")}</button>
          </div>
          <div className='columnOne'>
          <button className={'animation' }>{t("Sin comisiones")}</button>
          <button className={'animation' }>{t("Seguridad")}</button>
          <button className={'animation' }>{t("Tecnología PIX")}</button>
          <button className={'animation' }>{t("Pagos inmediatos")}</button>
          </div>
          <div className='columnOne'>
          <button className={'animation' }>{t("Cobros sin barreras")}</button>
          <button className={'animation' }>{t("Segura")}</button>
          <button className={'animation' }>{t("Soporte 24/7")}</button>
          <button className={'animation' }>{t("Gestión de negocios")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
