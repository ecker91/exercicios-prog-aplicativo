import { useState } from "react";

const CambioEuro = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoUm = (event) => {
    const valorCampo = event.target.value;

    setValorCampoUm(valorCampo);
    setValorCampoDois(valorCampo / 5.5);
  };

  const alterarValorCampoDois = (event) => {
    const valorCampo = event.target.value;
    setValorCampoDois(valorCampo);
    setValorCampoUm(valorCampo * 5.5);
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
