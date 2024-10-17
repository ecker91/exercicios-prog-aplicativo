import { useState } from "react";

const CambioEuro = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
    setValorCampoDois(valorCampoUm / 5.5);
  };

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
    setValorCampoUm(valorCampoDois * 5.5);
  };
  return (
    <>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong> reais é igual a </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <strong> euros. </strong>
    </>
  );
};

export default CambioEuro;
