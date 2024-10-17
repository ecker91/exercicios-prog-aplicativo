import { useState } from "react";

const BotaoContador = () => {
  const [numero, setNumero] = useState(0);

  const incrementarNumero = () => {
    setNumero(numero + 1);
  };

  return <button onClick={incrementarNumero}>Contador é: {numero}</button>;
};

export default BotaoContador;
