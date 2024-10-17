import { useState } from "react";

const Diminuir = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
  };
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
  };
  const [resultado, setResultado] = useState(0);

  const diminuirNumeros = () => {
    setResultado(Number(valorCampoUm) - Number(valorCampoDois));
  };

  return (
    <>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong> - </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <button onClick={diminuirNumeros}>Diminuir</button>
      <strong> = {resultado}</strong>
    </>
  );
};

export default Diminuir;
