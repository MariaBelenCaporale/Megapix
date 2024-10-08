import { useState } from "react";
import "./styles.css";

const CardTerminos = () => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(true);
  const [isPrivacyExpanded, setIsPrivacyExpanded] = useState(false);
  const [isTermsExpandTwo, setIsTermsExpandTwo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleTermsExpand = () => {
    setIsTermsExpanded((prevState) => !prevState);
  };

  const togglePrivacyExpand = () => {
    setIsPrivacyExpanded((prevState) => !prevState);
  };

  const toggleTermsExpandTwo = () => {
    setIsTermsExpandTwo((prevState) => !prevState);
  };

  return (
    <div className="cardTerms">
      <div>
        <h2 className="titleIndice">Índice</h2>
        <p className="subtitleTerms">Términos y condiciones</p>
      </div>
      <div>
        <div className="containerLinesText"> 
          <div className="lineTerms"></div>
          <nav onClick={toggleTermsExpand}>
            <a
              className="navTitleOne"
              href="#term1"
              onClick={() => handleItemClick("term1")}
            >
              <h3
                className={`titleCardItem  ${
                  selectedItem === "term1" ? "selected" : ""
                }`}
              >
                Términos y condiciones
              </h3>
            </a>
          </nav>
          {isTermsExpanded && (
            <ul className="termsList">
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term2" ? "selected" : ""
                  }`}
                  href="#term2"
                  onClick={() => handleItemClick("term2")}
                >
                  Aceptación de los Términos
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term3" ? "selected" : ""
                  }`}
                  href="#term3"
                  onClick={() => handleItemClick("term3")}
                >
                  Actualizaciones y Modificaciones
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term4" ? "selected" : ""
                  }`}
                  href="#term4"
                  onClick={() => handleItemClick("term4")}
                >
                  Comunicación Electrónica
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term5" ? "selected" : ""
                  }`}
                  href="#term5"
                  onClick={() => handleItemClick("term5")}
                >
                  Canales de Atención
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term6" ? "selected" : ""
                  }`}
                  href="#term6"
                  onClick={() => handleItemClick("term6")}
                >
                  Definiciones
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term7" ? "selected" : ""
                  }`}
                  href="#term7"
                  onClick={() => handleItemClick("term7")}
                >
                  Personas Jurídicas
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term8" ? "selected" : ""
                  }`}
                  href="#term8"
                  onClick={() => handleItemClick("term8")}
                >
                  Registración
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term9" ? "selected" : ""
                  }`}
                  href="#term9"
                  onClick={() => handleItemClick("term9")}
                >
                  Verificación de identidad
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term10" ? "selected" : ""
                  }`}
                  href="#term10"
                  onClick={() => handleItemClick("term10")}
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term11" ? "selected" : ""
                  }`}
                  href="#term11"
                  onClick={() => handleItemClick("term11")}
                >
                  Cuenta Megapix
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term12" ? "selected" : ""
                  }`}
                  href="#term12"
                  onClick={() => handleItemClick("term12")}
                >
                  Acceso
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term13" ? "selected" : ""
                  }`}
                  href="#term13"
                  onClick={() => handleItemClick("term13")}
                >
                  Uso indebido
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term14" ? "selected" : ""
                  }`}
                  href="#term14"
                  onClick={() => handleItemClick("term14")}
                >
                  Cierre de cuenta
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term15" ? "selected" : ""
                  }`}
                  href="#term15"
                  onClick={() => handleItemClick("term15")}
                >
                  Plazo de vigencia
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term16" ? "selected" : ""
                  }`}
                  href="#term16"
                  onClick={() => handleItemClick("term16")}
                >
                  Impuestos, costos y gastos
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term17" ? "selected" : ""
                  }`}
                  href="#term17"
                  onClick={() => handleItemClick("term17")}
                >
                  Propiedad intelectual
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term18" ? "selected" : ""
                  }`}
                  href="#term18"
                  onClick={() => handleItemClick("term18")}
                >
                  Domicilios y notificaciones{" "}
                </a>
              </li>
              <li>
                <a
                  className={`subNav ${
                    selectedItem === "term19" ? "selected" : ""
                  }`}
                  href="#term19"
                  onClick={() => handleItemClick("term19")}
                >
                  Resolución de conflictos
                </a>
              </li>
            </ul>
          )}

          <div className="lineTerms"></div>
          <nav onClick={togglePrivacyExpand}>
            <a
              className="navTitleOne"
              href="#a"
              onClick={() => handleItemClick("a")}
            >
              <h3
                className={`titleCardItem  ${
                  selectedItem === "a" ? "selected" : ""
                }`}
              >
                Políticas de privacidad
              </h3>
            </a>
          </nav>

          {isPrivacyExpanded && (
            <ul className="termsList">
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "b" ? "selected" : ""
                  }`}
                  href="#b"
                  onClick={() => handleItemClick("b")}

                >
                  Datos Personales Recopilados
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "c" ? "selected" : ""
                  }`}
                  href="#c"
                  onClick={() => handleItemClick("c")}
                  >
                  Uso de Datos Personales
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "d" ? "selected" : ""
                  }`}
                  href="#d"
                  onClick={() => handleItemClick("d")}>
                  Seguridad
                </a>
              </li>
              <li>
                <a className={`subNav ${
                    selectedItem === "e" ? "selected" : ""
                  }`}
                  href="#e"
                  onClick={() => handleItemClick("e")}>
                  Uso de Cookies
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "f" ? "selected" : ""
                  }`}
                  href="#f"
                  onClick={() => handleItemClick("f")}
                >
                  Enlaces a Sitios Externos
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "g" ? "selected" : ""
                  }`}
                  href="#g"
                  onClick={() => handleItemClick("g")}
                >
                  Modificaciones de la Políticas de Privacidad
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "h" ? "selected" : ""
                  }`}
                  href="#h"
                  onClick={() => handleItemClick("h")}
                >
                  Derechos del Usuario
                </a>
              </li>
            </ul>
          )}

          <div className="lineTerms"></div>

           



          <nav onClick={toggleTermsExpandTwo}>
            <a
              className="navTitleOne"
              href="#i"
              onClick={() => handleItemClick("i")}
            >
              <h3
                className={`titleCardItem  ${
                  selectedItem === "i" ? "selected" : ""
                }`}
              >
                Términos y condiciones Particulares
              </h3>
            </a>
          </nav>

          {isTermsExpandTwo && (
            <ul className="termsList">
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "j" ? "selected" : ""
                  }`}
                  href="#j"
                  onClick={() => handleItemClick("j")}
                >
                  Definiciones
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "k" ? "selected" : ""
                  }`}
                  href="#k"
                  onClick={() => handleItemClick("k")}
                >
                  Uso del sistema Megapix
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "l" ? "selected" : ""
                  }`}
                  href="#l"
                  onClick={() => handleItemClick("l")}
                >
                  Límites
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "m" ? "selected" : ""
                  }`}
                  href="#m"
                  onClick={() => handleItemClick("m")}
                >
                  Comisiones
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "n" ? "selected" : ""
                  }`}
                  href="#n"
                  onClick={() => handleItemClick("n")}
                >
                  Retiros
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "o" ? "selected" : ""
                  }`}
                  href="#o"
                  onClick={() => handleItemClick("o")}
                >
                  Transacciones en criptomonedas
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "p" ? "selected" : ""
                  }`}
                  href="#p"
                  onClick={() => handleItemClick("p")}
                >
                  Declaraciones
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "q" ? "selected" : ""
                  }`}
                  href="#q"
                  onClick={() => handleItemClick("q")}
                >
                  Datos personales
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "r" ? "selected" : ""
                  }`}
                  href="#r"
                  onClick={() => handleItemClick("r")}
                >
                  Seguridad y Responsabilidad
                </a>
              </li>
              <li>
                <a 
                className={`subNav ${
                    selectedItem === "s" ? "selected" : ""
                  }`}
                  href="#s"
                  onClick={() => handleItemClick("s")}
                >
                  Modificaciones
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTerminos;
