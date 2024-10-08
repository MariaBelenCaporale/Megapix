import CardTerminos from "../../components/cardTerminos/CardTerminos";
import Footer from "../../components/Footer/Footer";
import Terminos from "../Terminos/Terminos";
import "./styles.css";

const Condiciones = () => {
  return (
    <section className="containerSectionCond">
      <div className="containerTotalCond">
        <CardTerminos />
        <div className="containerTotalTerminos">
        <div className="containerTitleTerms">
              <h2 className="titleTerms">Términos y condiciones</h2>
            </div>
        <div className="terminos">
          <Terminos />
        </div>
       </div>
      </div>
      <Footer />
    </section>
  );
};

export default Condiciones;
