import "./styles.css";
import { useTranslation } from "react-i18next";
import Roscon from "@images/roscon.gif";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";

const SectionSix = () => {
  const { t } = useTranslation();

  return (
    <section className="sectionSix">
      <div className="containerVideosSix">
        <div className="containerTextSix">
          <p className="itemSix">{t("¿ESTÁS LISTO?")}</p>
          <h2 className="titleSectionSix">{t("Comencemos")}</h2>
          <p className="subtitleSectionSix">
            {t(
              "Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix."
            )}
          </p>
          <ButtonComponent title={t("Visitar plataforma")} />
        </div>
        <div className="containerVideo">
          <img src={Roscon} alt="Roscón giratorio" className="videoGif" />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
