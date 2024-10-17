import { useState } from "react";

const CalculoIMC = () => {
  const [valorCampoUm, setValorCampoUm] = useState("");

  const alterarValorCampoUm = (event) => {
    setValorCampoUm(event.target.value);
  };
  const [valorCampoDois, setValorCampoDois] = useState("");

  const alterarValorCampoDois = (event) => {
    setValorCampoDois(event.target.value);
  };
  const [resultado, setResultado] = useState(0);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    setResultado(
      Number(valorCampoDois) / (Number(valorCampoUm) * Number(valorCampoUm))
    );
    switch (true) {
      case resultado < 18.5:
        setClassificacao("Abaixo do peso");
        break;
      case resultado < 25:
        setClassificacao("Peso normal");
        break;
      case resultado < 30:
        setClassificacao("Sobrepeso");
        break;
      default:
        setClassificacao("Obeso");
        break;
    }
  };

  return (
    <>
      <strong>Altura (m):</strong>
      <input type="text" value={valorCampoUm} onChange={alterarValorCampoUm} />
      <strong>Peso (kg): </strong>
      <input
        type="text"
        value={valorCampoDois}
        onChange={alterarValorCampoDois}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      <br />
      <strong> Resultado: </strong>
      {resultado} {classificacao}
    </>
  );
};

export default CalculoIMC;
