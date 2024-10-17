import { useState } from "react";

const Multiplicar = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
  };
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
  };
  const [resultado, setResultado] = useState(0);

  const multiplicarNumeros = () => {
    setResultado(Number(valorCampoUm) * Number(valorCampoDois));
  };

  return (
    <>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong> * </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <button onClick={multiplicarNumeros}>Multiplicar</button>
      <strong> = {resultado}</strong>
    </>
  );
};

export default Multiplicar;
