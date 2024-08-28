import CardDrag from "../../components/Card/CardGrag/CardDrag";
import Pix from "../../images/pix.png";
import "./styles.css";

const SectionFive = () => {
  return (
    <section className="containerSectionFive">
      <div className="containerFive">
        <h2 className="titleFive">Características & Beneficios</h2>
      </div>
      <div className="containerDragCard">
        <CardDrag
          title="Roles & permisos"
          subtitle="“Conversión automática de pesos a reales, y en dólar digital que quedara en tu cuenta 🙌”."
          img={Pix}
        />
        <CardDrag
          title="Tecnología PIX"
          subtitle="“Conversión automática de pesos a reales, y en dólar digital que quedara en tu cuenta 🙌”."
          img={Pix}
        />

        <CardDrag
          title="Plataforma responsiva"
          subtitle="“Conversión automática de pesos a reales, y en dólar digital que quedara en tu cuenta 🙌”."
          img={Pix}
        />
        <CardDrag
          title="Gestión de tiendas"
          subtitle="“Conversión automática de pesos a reales, y en dólar digital que quedara en tu cuenta 🙌”."
          img={Pix}
        />
         {/* <CardDrag
          title="Gestión de tiendas"
          subtitle="“Conversión automática de pesos a reales, y en dólar digital que quedara en tu cuenta 🙌”."
          img={Pix}
        /> */}
        
      </div>
    </section>
  );
};

export default SectionFive;
