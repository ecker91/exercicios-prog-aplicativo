import { useState } from "react";

const Dividir = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
  };
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
  };
  const [resultado, setResultado] = useState(0);

  const dividirNumeros = () => {
    setResultado(Number(valorCampoUm) / Number(valorCampoDois));
  };

  return (
    <>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong> / </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <button onClick={dividirNumeros}>Multiplicar</button>
      <strong> = {resultado}</strong>
    </>
  );
};

export default Dividir;
