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
    const temp =
      Number(valorCampoDois) / (Number(valorCampoUm) * Number(valorCampoUm));
    setResultado(temp);
    switch (true) {
      case temp < 18.5:
        setClassificacao("Abaixo do peso");
        break;
      case temp < 25:
        setClassificacao("Peso normal");
        break;
      case temp < 30:
        setClassificacao("Sobrepeso");
        break;
      case temp >= 30:
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
