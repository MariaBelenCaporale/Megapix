import { useState } from "react";
import "./styles.css";
import argentinaFlag from '../../images/argentina.png'; 
import eeuuFlag from '../../images/eeuu.png'; 
import brasilFlag from '../../images/brasil.jpg'; 
import Info from '../../images/info.png';

const Inputs = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const [isInput1Focused, setIsInput1Focused] = useState(false);
  const [isInput2Focused, setIsInput2Focused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleFocusInput1 = () => {
    setIsInput1Focused(true);
  };

  const handleBlurInput1 = () => {
    setIsInput1Focused(false);
  };

  const handleFocusInput2 = () => {
    setIsInput2Focused(true);
  };

  const handleBlurInput2 = () => {
    setIsInput2Focused(false);
  };

  return (
    <div className="containerTotalInput">
      <div className="containerMonto">
        <p className="monto">Monto</p>
        <img src={Info} alt="Info Icon"/>
      </div>
      <div className="containerInput">
        <div className="inputWrapper">
          {isInput1Focused && (
            <div className="containerItemUno">
              <p className="itemUno">Ingresa el monto que querés cobrar 👉🏻</p>
            </div>
          )}
          <input
            placeholder="$100.000"
            className="inputs"
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleChange}
            onFocus={handleFocusInput1}
            onBlur={handleBlurInput1}
          />
          <div className="containerFlagInput">
            <img src={argentinaFlag} alt="Bandera de Argentina" className="flagIcon" />
            <p className="countryOk">ARG</p>
          </div>
        </div>

        <div className="inputWrapper">
          <input
            placeholder="110.91"
            className="inputs"
            type="text"
            name="input2"
            value={inputValues.input2}
            onChange={handleChange}
            onFocus={handleFocusInput2}
            onBlur={handleBlurInput2}
          />
          {isInput2Focused && (
            <div className="infoMessage">
              <p className="itemDos">“Conversión automática de pesos a reales, y en dólar digital que quedará en tu cuenta 🙌”.</p>
            </div>
          )}
          <div className="containerFlagInput">
            <img src={eeuuFlag} alt="Bandera de Estados Unidos" className="flagIcon" />
            <p className="countryOk">USDT</p>
          </div>
        </div>
        <div className="inputWrapper">
          <input
            placeholder="Motivo"
            className="inputs"
            type="text"
            name="input3"
            value={inputValues.input3}
            onChange={handleChange}
          />
        </div>
      </div>
      <p className="monto">Monto a cobrar</p>
      <div className="inputWrapper">
        <input
          placeholder="594.38"
          className="inputs"
          type="text"
          name="input4"
          value={inputValues.input4}
          onChange={handleChange}
        />
        <div className="containerFlagInput">
          <img src={brasilFlag} alt="Bandera de Brasil" className="flagIcon" />
          <p className="countryOk">BRL</p>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
