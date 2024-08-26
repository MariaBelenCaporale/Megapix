import { useState } from "react";
import "./styles.css";

const Inputs = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="containerTotalInput">
      <p className="monto">Monto</p>
        <div className="containerInput">
            <input
              className="inputs"
              type="text"
              name="input1"
              value={inputValues.input1}
              onChange={handleChange}
            />
            <input
            className="inputs"
              type="text"
              name="input2"
              value={inputValues.input2}
              onChange={handleChange}
            />
            <input
            className="inputs"
              type="text"
              name="input3"
              value={inputValues.input3}
              onChange={handleChange}
            />
        </div>
        <p className="monto">Monto a cobrar</p>
        <input
            className="inputs"
              type="text"
              name="input4"
              value={inputValues.input3}
              onChange={handleChange}
            />
      </div>
    </div>
  );
};

export default Inputs;
