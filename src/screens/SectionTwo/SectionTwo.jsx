import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./styles.css"; 

const SectionTwo = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const buttons = document.querySelectorAll('.animation');

    const randomButtonBlink = () => {
      const randomIndex = Math.floor(Math.random() * buttons.length);
      const button = buttons[randomIndex];

      button.classList.add('blink');

      setTimeout(() => {
        button.classList.remove('blink');
      }, 3000);
    };

    const interval = setInterval(randomButtonBlink, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="containerSectionTwo">
      <div className="blurTwo">
        <h2 className="titleSectionTwo">
           {t('Ventajas de usar')} <span className="highlight"> {t('Megapix')}</span>
        </h2>
      </div>
      <div className="prueba">
        <div className="rotated-items-container">
        <button className={`animation btn01`}>{t("Control de tus finanzas")}</button>
          <button className={`animationTwo btn2`}>{t("Cobros QR")}</button>
          <button className={`animation btn3`}>{t("Link de pago")}</button>
          <button className={`animationTwo btn4`}>{t("Conexión con turistas")}</button>
          <button className={`animationTwo btn5`}>{t("Multiplataforma")}</button>
          <button className={`animation btn6`}>{t("Rápido")}</button>
          <button className={`animation btn7`}>{t("Gratis")}</button>
          <button className={`animation btn8`}>{t("Fácil")}</button>
          <button className={`animationTwo btn9`}>{t("Sin comisiones")}</button>
          <button className={`animationTwo btn10`}>{t("Seguridad")}</button>
          <button className={`animation btn11`}>{t("Tecnología PIX")}</button>
          <button className={`animation btn12`}>{t("Pagos inmediatos")}</button>
          <button className={`animationTwo btn13`}>{t("Cobros sin barreras")}</button>
          <button className={`animationTwo btn14`}>{t("Segura")}</button>
          <button className={`animationTwo btn15`}>{t("Soporte 24/7")}</button>
          <button className={`animation btn16`}>{t("Gestión de negocios")}</button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
