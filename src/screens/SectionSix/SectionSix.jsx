import { useTranslation } from "react-i18next";
import Roscon from "@images/roscon.gif";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";
import "./styles.css";

const SectionSix = () => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    window.open("https://app.mgapix.com/", '_blank'); 
  };

  return (
    <section className="sectionSix">
      <div className="containerVideosSix">
        <div className="containerTextSix">
          <p className="itemSix">{t("¿ESTÁS LISTO?")}</p>
          <h2 className="titleSectionSix">{t("Comencemos")}</h2>
          <p className="subtitleSectionSix">
            {t(
              "Creá experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix."
            )}
          </p>
          <ButtonComponent title={t("Visitar plataforma")} onClick={handleButtonClick} />
        </div>
        <div className="containerVideo">
          <img src={Roscon} alt="Roscón giratorio" className="videoGif" />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
