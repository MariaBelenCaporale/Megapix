import ButtonTurist from "../../../components/buttonTurist/ButtonTurist";
import FondoFood from "../../../images/fondoFood.png";
import CardSelect from "../../../components/Card/CardSelect/CardSelect";
import Food from "../../../images/comida.png";
import "./styles.css";

const TuristSix = () => {
  return (
    <section className="containerSectionSixTu">
      <div className="containerTitleSix">
        <h2 className="titleTuristSix">¿Por dónde queres empezar?</h2>
      </div>
      <div className="containerButtonSix">
        <ButtonTurist title="Indumentaria" />
        <ButtonTurist title="Gastronomía" />
        <ButtonTurist title="Hospedaje" />
        <ButtonTurist title="Entretenimiento" />
        <ButtonTurist title="Vuelos" />
        <ButtonTurist title="Excursiones" />
        <ButtonTurist title="Recuerdos" />
      </div>
      <div className="containerFoodSix">
        <img src={FondoFood} alt="imagen de fondo comida" />
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
      </div>
    </section>
  );
};

export default TuristSix;
