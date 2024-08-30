import CardDrag from "../../components/Card/CardGrag/CardDrag";
import "./styles.css";

const SectionFive = () => {
  return (
    <section className="containerSectionFive">
      <div className="containerFive">
        <h2 className="titleFive">Características & Beneficios</h2>
      </div>
      <div className="containerDragCard">
        <CardDrag />
      </div>
    </section>
  );
};

export default SectionFive;
