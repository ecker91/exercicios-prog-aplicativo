import { useState } from "react";

const CambioDolar = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoUm = (event) => {
    const valorCampo = event.target.value;
    setValorCampoUm(valorCampo);
    setValorCampoDois(valorCampo / 5);
  };

  const alterarValorCampoDois = (event) => {
    const valorCampo = event.target.value;
    setValorCampoUm(valorCampo * 5);
    setValorCampoDois(valorCampo);
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
      <strong> dólares. </strong>
    </>
  );
};

export default CambioDolar;
