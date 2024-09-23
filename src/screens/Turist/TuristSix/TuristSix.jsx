import { useState } from "react";
import ButtonTurist from "../../../components/buttonTurist/ButtonTurist";
import CardSelect from "../../../components/Card/CardSelect/CardSelect";
import Fondo from "@images/dialog.png";
import Food from "@images/food.png";
import Bodegas from "@images/bodegas.png";
import Ski from "@images/ski.png";
import Indumentaria from "@images/indumentaria.png";
import Entretenimiento from "@images/entretenimiento.png";
import Hospedaje from "@images/hospedaje.png";
import Vuelos from "@images/vuelos.png";
import Excursiones from "@images/excursiones.png";
import { useTranslation } from 'react-i18next';
import "./styles.css";

const TuristSix = () => {
  const { t } = useTranslation();

  const [activeCard, setActiveCard] = useState("Gastronomía");
  const [activeButton, setActiveButton] = useState("Gastronomía");

  const handleButtonClick = (buttonId, cardTitle) => {
    setActiveButton(buttonId);
    setActiveCard(cardTitle);
  };
  return (
    <section className="containerSectionSixTu">
      <div className="containerTitleSix">
        <h2 className="titleTuristSix">{t('¿Por dónde queres empezar?')}</h2>
      </div>
      <div className="containerButtonSix">
        <ButtonTurist
          isActive={activeButton === "Indumentaria"}
          title={t("Indumentaria")}
          onClick={() => handleButtonClick("Indumentaria", "Indumentaria")}
        />
        <ButtonTurist
          isActive={activeButton === "Recuerdos & experiencias"}
          title={t("Recuerdos & experiencias")}
          onClick={() => handleButtonClick("Recuerdos & experiencias", "Recuerdos & experiencias")}
        />
        <ButtonTurist
          isActive={activeButton === "Ski"}
          title={t("Ski")}
          onClick={() => handleButtonClick("Ski", "Ski")}
        />
        <ButtonTurist
          isActive={activeButton === "Gastronomía"}
          title={t("Gastronomía")}
          onClick={() => handleButtonClick("Gastronomía", "Gastronomía")}
        />
        <ButtonTurist
          isActive={activeButton === "Hospedaje"}
          title={t("Hospedaje")}
          onClick={() => handleButtonClick("Hospedaje", "Hospedaje")}
        />
        <ButtonTurist
          isActive={activeButton === "Entretenimiento"}
          title={t("Entretenimiento")}
          onClick={() =>
            handleButtonClick("Entretenimiento", "Entretenimiento")
          }
        />
        <ButtonTurist
          isActive={activeButton === "Vuelos"}
          title={t("Vuelos")}
          onClick={() => handleButtonClick("Vuelos", "Vuelos")}
        />
        <ButtonTurist
          isActive={activeButton === "Excursiones"}
          title={t("Excursiones")}
          onClick={() => handleButtonClick("Excursiones", "Excursiones")}
        />
        <ButtonTurist
          isActive={activeButton === "Bodegas"}
          title={t("Bodegas")}
          onClick={() => handleButtonClick("Bodegas", "Bodegas")}
        />
      </div>
      <div className="containerFoodSix">
        <img src={Fondo} className="fondo" alt="imagen de fondo comida" />
        <div className="cardContainer">
          {activeCard === "Gastronomía" && (
            <CardSelect
              image={Food}
              title={t("Gastronomía")}
              text={t("Argentina ofrece una experiencia gastronómica inigualable que combina tradición y sabor. Desde el famoso asado, símbolo de la cultura argentina, hasta las empanadas crujientes y las pastas caseras, cada plato cuenta una historia. No podés dejar de probar el vino Malbec en las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires. La gastronomía argentina es un festín para los sentidos, perfecta para explorar mientras conocés la esencia del país. ¡Descubrí los sabores que hacen de Argentina un destino culinario único!")}
            />
          )}
          {activeCard === "Recuerdos & experiencias" && (
            <CardSelect
              image={Food}
              title={t("Recuerdos & experiencias")}
              text={t("Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre.")}
            />
          )}
          {activeCard === "Indumentaria" && (
            <CardSelect
              image={Indumentaria}
              title={t("Indumentaria")}
              text={t("Argentina te espera con una increíble variedad de opciones para renovar tu estilo. Desde las boutiques de diseño en Buenos Aires hasta outlets con grandes marcas a precios imperdibles. Recorre las elegantes calles de Palermo, donde los diseñadores locales exhiben las mejores prendas, o descubre los grandes centros comerciales como Abasto y Alto Palermo, donde las marcas internacionales y nacionales te esperan con ofertas únicas.")}
            />
          )}
          {activeCard === "Ski" && (
            <CardSelect
              image={Ski}
              title={t("Ski")}
              text={t("La Patagonia argentina te espera con sus espectaculares centros de esquí, ideales para disfrutar del invierno en paisajes de ensueño. Desde Cerro Catedral en Bariloche hasta el Cerro Castor en Ushuaia, encontrarás pistas para todos los niveles. Disfruta de días llenos de adrenalina en la nieve, seguidos de cálidos refugios para relajarte.")}
            />
          )}
          {activeCard === "Hospedaje" && (
            <CardSelect
              image={Hospedaje}
              title={t("Hospedaje")}
              text={t("Argentina te ofrece una amplia variedad de opciones de hospedaje para todos los gustos. Desde hoteles de lujo a cabañas en el medio de la montaña, cada lugar tiene su encanto y te invita a disfrutar de una estadía única. Explora ciudades llenas de historia, deléitate con la gastronomía local y relájate en alojamientos que combinan comodidad y autenticidad. Además, pagar es fácil: usa tu cuenta de PIX desde Brasil y disfruta de tu viaje sin complicaciones.")}
            />
          )}
          {activeCard === "Entretenimiento" && (
            <CardSelect
              image={Entretenimiento}
              title={t("Entretenimiento")}
              text={t("Si estás buscando una experiencia cultural única, Argentina te espera con los brazos abiertos. Buenos Aires  ofrece una increíble variedad de espectáculos que van desde el tango tradicional hasta las producciones teatrales más innovadoras. No importa cuál sea tu preferencia, encontrarás el entretenimiento perfecto para vos. Visita  las salas emblemáticas del Teatro Colón, reconocido mundialmente por su arquitectura y acústica impecable. Disfruta de producciones de ópera, ballet y conciertos de nivel internacional.")}
            />
          )}
          {activeCard === "Vuelos" && (
            <CardSelect
              image={Vuelos}
              title={t("Vuelos")}
              text={t("Argentina es un país lleno de contrastes y maravillas naturales, y la mejor manera de descubrirlo es viajando de norte a sur. Con la comodidad de los vuelos internos no necesitas elegir un solo destino. En Argentina, cada vuelo es una oportunidad para descubrir una nueva maravilla natural o cultural. Puedes comprar tus boletos en pesos argentinos y pagar de forma sencilla y segura con PIX desde Brasil.")}
            />
          )}
          {activeCard === "Excursiones" && (
            <CardSelect
              image={Excursiones}
              title={t("Excursiones")}
              text={t("Descubrí la majestuosidad de los paisajes argentinos con excursiones inolvidables. Desde las impresionantes Cataratas del Iguazú en Misiones hasta los glaciares de la Patagonia. Argentina te invita a vivir aventuras en plena naturaleza que se adaptan a tus intereses. Ya sea que busques adrenalina, relax o cultura, acá encontrarás algo extraordinario.")}
            />
          )}
          {activeCard === "Bodegas" && (
            <CardSelect
              image={Bodegas}
              title={t("Bodegas")}
              text={t("Mendoza, la capital del vino argentino, te invita a vivir una experiencia única recorriendo sus prestigiosas bodegas. Disfruta de paisajes impresionantes al pie de la cordillera de los Andes mientras degustas los mejores Malbecs del mundo, acompañado por expertos que te guiarán en cada copa. Visita bodegas de renombre, donde podrás degustar vinos de clase mundial mientras aprendes sobre los secretos detrás de cada cosecha, cada detalle está diseñado para brindarte una experiencia auténtica")}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TuristSix;
