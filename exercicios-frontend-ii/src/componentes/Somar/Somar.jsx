import { useState } from "react";

const Somar = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
  };
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
  };
  const [resultado, setResultado] = useState(0);

  const somarNumeros = () => {
    setResultado(Number(valorCampoUm) + Number(valorCampoDois));
  };

  return (
    <>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong> + </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <button onClick={somarNumeros}>Somar</button>
      <strong> = {resultado}</strong>
    </>
  );
};

export default Somar;
