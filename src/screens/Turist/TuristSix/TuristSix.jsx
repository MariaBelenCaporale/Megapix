import ButtonTurist from "../../../components/buttonTurist/ButtonTurist";
import CardSelect from "../../../components/Card/CardSelect/CardSelect";
import Fondo from "@images/dialog.png"; 
import Food from "@images/food.png";
import Vuelos from "@images/vuelos.png";
import Indumentaria from "@images/indumentaria.png";
import Entretenimiento from "@images/entretenimiento.png";
import Hospedaje from "@images/hospedaje.png";
import Excursiones from "@images/excursiones.png";
import Recuerdos from "@images/recuerdos.png";
import { useTranslation } from "react-i18next";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useEffect, useState } from "react";
import "./styles.css";

const TuristSix = () => {
  const { t } = useTranslation();

  const [activeCard, setActiveCard] = useState("Gastronomía");
  const [activeButton, setActiveButton] = useState("Gastronomía");
  const [backgroundImage, setBackgroundImage] = useState(Fondo); 

  const handleButtonClick = (buttonId, cardTitle) => {
    setActiveButton(buttonId);
    setActiveCard(cardTitle);
  };

  const handleArrowClick = (direction) => {
    const cardTitles = [
      "Recuerdos & experiencias", 
      "Gastronomía", 
      "Excursiones", 
      "Hospedaje", 
      "Entretenimiento", 
      "Indumentaria", 
      "Vuelos y transportes"
    ];

    const currentIndex = cardTitles.indexOf(activeCard);
    let newIndex = currentIndex;

    if (direction === "left") {
      newIndex = (currentIndex - 1 + cardTitles.length) % cardTitles.length;
    } else if (direction === "right") {
      newIndex = (currentIndex + 1) % cardTitles.length;
    }

    setActiveCard(cardTitles[newIndex]);
    setActiveButton(cardTitles[newIndex]);
  };

  useEffect(() => {
    switch (activeCard) {
      case "Recuerdos & experiencias":
        setBackgroundImage(Recuerdos);
        break;
      case "Gastronomía":
        setBackgroundImage(Food);
        break;
      case "Excursiones":
        setBackgroundImage(Excursiones);
        break;
      case "Hospedaje":
        setBackgroundImage(Hospedaje);
        break;
      case "Entretenimiento":
        setBackgroundImage(Entretenimiento);
        break;
      case "Indumentaria":
        setBackgroundImage(Indumentaria);
        break;
      case "Vuelos y transportes":
        setBackgroundImage(Vuelos);
        break;
      default:
        setBackgroundImage(Fondo); 
    }
  }, [activeCard]);

  return (
    <section className="containerSectionSixTu">
      <div className="containerTitleSix">
        <h2 className="titleTuristSix">{t("¿Por dónde queres empezar?")}</h2>
      </div>
      <div className="containerButtonSix">
 
        <ButtonTurist
          isActive={activeButton === "Recuerdos & experiencias"}
          title={t("Recuerdos & experiencias")}
          onClick={() => handleButtonClick("Recuerdos & experiencias", "Recuerdos & experiencias")}
        />
        <ButtonTurist
          isActive={activeButton === "Gastronomía"}
          title={t("Gastronomía")}
          onClick={() => handleButtonClick("Gastronomía", "Gastronomía")}
        />
        <ButtonTurist
          isActive={activeButton === "Excursiones"}
          title={t("Excursiones")}
          onClick={() => handleButtonClick("Excursiones", "Excursiones")}
        />
        <ButtonTurist
          isActive={activeButton === "Hospedaje"}
          title={t("Hospedaje")}
          onClick={() => handleButtonClick("Hospedaje", "Hospedaje")}
        />
        <ButtonTurist
          isActive={activeButton === "Entretenimiento"}
          title={t("Entretenimiento")}
          onClick={() => handleButtonClick("Entretenimiento", "Entretenimiento")}
        />
        <ButtonTurist
          isActive={activeButton === "Indumentaria"}
          title={t("Indumentaria")}
          onClick={() => handleButtonClick("Indumentaria", "Indumentaria")}
        />
        <ButtonTurist
          isActive={activeButton === "Vuelos y transportes"}
          title={t("Vuelos y transportes")}
          onClick={() => handleButtonClick("Vuelos y transportes", "Vuelos y transportes")}
        />
      </div>

      <div className="sliderContainer">
        <button className="arrowButton left" onClick={() => handleArrowClick("left")}>
          <KeyboardArrowLeftRoundedIcon className="arrowCarousel"/>
        </button>
        <div 
          className="containerFoodSix" 
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundRepeat: 'no-repeat',  
            backgroundSize: 'cover',   
            backdropFilter: 'blur(10px)' 
          }}
        >
          <div className="cardContainer">
            {activeCard === "Recuerdos & experiencias" && (
              <CardSelect
                image={Recuerdos}
                title={t("Recuerdos & experiencias")}
                text={t(
                  "Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre."
                )}
              />
            )}
            {activeCard === "Gastronomía" && (
              <CardSelect
                image={Food}
                title={t("Gastronomía")}
                text={t(
                  "Argentina es un país con una gastronomía variada y llena de sabores, donde se fusionan tradiciones europeas, indígenas y criollas para crear una experiencia única e irrepetible. Desde el asado, que reúne familias y amigos, hasta las empanadas y pastas heredadas de inmigrantes, cada bocado refleja la rica mezcla de culturas que nos define. Vení a descubrir la esencia de Argentina a través de su cocina, donde cada plato es una celebración de diversidad y sabor. ¡Animate a probar lo mejor de nuestra gastronomía!"
                )}
              />
            )}
            {activeCard === "Excursiones" && (
              <CardSelect
                image={Excursiones}
                title={t("Excursiones")}
                text={t(
                  "Te invitamos a conocer una inmensa diversidad de excursiones que te llevarán a descubrir la belleza natural de los lugares más visitados de Argentina donde vas a vivir aventuras únicas y memorables. Desde emociones extremas y momentos de tranquilidad hasta una inmersión cultural, siempre encontrarás una experiencia extraordinaria adaptada a vos. ¡Vení a disfrutar con Megapix la inmensidad de nuestros paisajes y hacé de cada excursión un recuerdo inolvidable!"
                )}
              />
            )}
            {activeCard === "Hospedaje" && (
              <CardSelect
                image={Hospedaje}
                title={t("Hospedaje")}
                text={t(
                  "Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones."
                )}
              />
            )}
            {activeCard === "Entretenimiento" && (
              <CardSelect
                image={Entretenimiento}
                title={t("Entretenimiento")}
                text={t(
                  "¡Descubrí la magia cultural de Argentina! Te esperamos con espectáculos únicos y experiencias inolvidables. Desde el tango más auténtico hasta vibrantes obras de teatro y conciertos. Además, vas a poder explorar nuestras ferias, celebraciones, festivales, museos y arquitectura donde el arte se fusiona con la historia de manera incomparable. ¡Con Megapix vení a recorrer y conocer nuestra cultura apasionada!"
                )}
              />
            )}
            {activeCard === "Indumentaria" && (
              <CardSelect
                image={Indumentaria}
                title={t("Indumentaria")}
                text={t(
                  "Desde las boutiques de diseño hasta los outlets con grandes marcas a precios irresistibles. ¡No te podes perder la experiencia de compras en todo el país! Te invitamos a recorrer las calles del barrio de Palermo, en Buenos Aires, donde los diseñadores locales exhiben sus prendas exclusivas confeccionadas con materiales nacionales, como el cuero argentino de alta calidad y tejidos artesanales. Además, descubrí los tradicionales ponchos y prendas de lana merino, originarias del norte y la Patagonia, que capturan la esencia de la cultura local. Con Megapix, no dudes en aprovechar el mix de marcas internacionales y nacionales con una fusión única entre lo moderno y lo auténtico."
                )}
              />
            )}
            {activeCard === "Vuelos y transportes" && (
              <CardSelect
                image={Vuelos}
                title={t("Vuelos y transportes")}
                text={t(
                  "Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!"
                )}
              />
            )}
          </div>
        </div>
        <button className="arrowButton right" onClick={() => handleArrowClick("right")}>
          <KeyboardArrowRightRoundedIcon className="arrowCarousel"/>
        </button>
      </div>
    </section>
  );
};

export default TuristSix;
