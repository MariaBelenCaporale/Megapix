import { useState } from 'react';
import ButtonTurist from "../../../components/buttonTurist/ButtonTurist";
import FondoFood from "../../../images/fondoFood.png";
import CardSelect from "../../../components/Card/CardSelect/CardSelect";
import Food from "../../../images/comida.png";
import Indumentaria from "../../../images/indumentaria.png";
import Entretenimiento from "../../../images/entretenimiento.png";
import Hospedaje from "../../../images/hospedaje.png";
import Vuelos from "../../../images/vuelos.png";
import Excursiones from "../../../images/excursiones.png";
import "./styles.css";

const TuristSix = () => {
  const [activeCard, setActiveCard] = useState('Gastronomía'); 
  const [activeButton, setActiveButton] = useState('Indumentaria');


  const handleButtonClick = (buttonId, cardTitle) => {
    setActiveButton(buttonId);
    setActiveCard(cardTitle);
  }
  return (
    <section className="containerSectionSixTu">
      <div className="containerTitleSix">
        <h2 className="titleTuristSix">¿Por dónde queres empezar?</h2>
      </div>
      <div className="containerButtonSix">
        <ButtonTurist isActive={activeButton === 'Indumentaria'}
          title="Indumentaria"
          onClick={() => handleButtonClick('Indumentaria', 'Indumentaria')} />
        <ButtonTurist isActive={activeButton === 'Gastronomía'} 
          title="Gastronomía" onClick={() => handleButtonClick('Gastronomía', 'Gastronomía')} />
        <ButtonTurist isActive={activeButton === 'Hospedaje'}
          title="Hospedaje" onClick={() => handleButtonClick('Hospedaje', 'Hospedaje')} />
        <ButtonTurist isActive={activeButton === 'Entretenimiento'}
          title="Entretenimiento" onClick={() => handleButtonClick('Entretenimiento', 'Entretenimiento')} />
        <ButtonTurist isActive={activeButton === 'Vuelos'}
          title="Vuelos" onClick={() => handleButtonClick('Vuelos', 'Vuelos')} />
        <ButtonTurist isActive={activeButton === 'Excursiones'}
          title="Excursiones" onClick={() => handleButtonClick('Excursiones', 'Excursiones')} />
        <ButtonTurist isActive={activeButton === 'Recuerdos'}
          title="Recuerdos" onClick={() => handleButtonClick('Recuerdos', 'Recuerdos')} />
      </div>
      <div className="containerFoodSix">
      <img src={FondoFood} className='fondo' alt="imagen de fondo comida" />
        <div className="cardContainer">
          {activeCard === 'Gastronomía' && (
            <CardSelect
              image={Food}
              title='Gastronomía'
              text="Argentina ofrece una experiencia gastronómica inigualable que combina
              tradición y sabor. Desde el famoso asado, símbolo de la cultura
              argentina, hasta las empanadas crujientes y las pastas caseras, cada
              plato cuenta una historia. No podés dejar de probar el vino Malbec en
              las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires.
              La gastronomía argentina es un festín para los sentidos, perfecta para
              explorar mientras conocés la esencia del país. ¡Descubrí los sabores
              que hacen de Argentina un destino culinario único!"
            />
          )}
          {activeCard === 'Indumentaria' && (
            <CardSelect
              image={Indumentaria}
              title='Indumentaría'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Hospedaje' && (
            <CardSelect
              image={Hospedaje}
              title='Hospedaje'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Entretenimiento' && (
            <CardSelect
              image={Entretenimiento}
              title='Entretenimiento'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Vuelos' && (
            <CardSelect
              image={Vuelos}
              title='Vuelos'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Excursiones' && (
            <CardSelect
              image={Excursiones}
              title='Excursiones'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Recuerdos' && (
            <CardSelect
              image={Food}
              title='Recuerdos'
              text="Lorem ipsum"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TuristSix;