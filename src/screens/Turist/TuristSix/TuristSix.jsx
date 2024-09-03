import { useState } from 'react';
import ButtonTurist from "../../../components/buttonTurist/ButtonTurist";
import FondoFood from "../../../images/fondoFood.png";
import CardSelect from "../../../components/Card/CardSelect/CardSelect";
import Food from "../../../images/comida.png";
import "./styles.css";

const TuristSix = () => {
  const [activeCard, setActiveCard] = useState('Gastronomía'); 


  const handleButtonClick = (title) => {
    setActiveCard(title);
  };

  return (
    <section className="containerSectionSixTu">
      <div className="containerTitleSix">
        <h2 className="titleTuristSix">¿Por dónde queres empezar?</h2>
      </div>
      <div className="containerButtonSix">
        <ButtonTurist title="Indumentaria" onClick={() => handleButtonClick('Indumentaria')} />
        <ButtonTurist title="Gastronomía" onClick={() => handleButtonClick('Gastronomía')} />
        <ButtonTurist title="Hospedaje" onClick={() => handleButtonClick('Hospedaje')} />
        <ButtonTurist title="Entretenimiento" onClick={() => handleButtonClick('Entretenimiento')} />
        <ButtonTurist title="Vuelos" onClick={() => handleButtonClick('Vuelos')} />
        <ButtonTurist title="Excursiones" onClick={() => handleButtonClick('Excursiones')} />
        <ButtonTurist title="Recuerdos" onClick={() => handleButtonClick('Recuerdos')} />
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
              image={Food}
              title='Indumentaría'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Hospedaje' && (
            <CardSelect
              image={Food}
              title='Hospedaje'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Entretenimiento' && (
            <CardSelect
              image={Food}
              title='Entretenimiento'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Vuelos' && (
            <CardSelect
              image={Food}
              title='Vuelos'
              text="Lorem ipsum"
            />
          )}
          {activeCard === 'Excursiones' && (
            <CardSelect
              image={Food}
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