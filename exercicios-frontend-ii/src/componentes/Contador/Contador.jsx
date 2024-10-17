import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const incrementarNumero = () => {
    setNumero(numero + 1);
  };
  const decrementarNumero = () => {
    setNumero(numero - 1);
  };

  return (
    <>
      <button onClick={decrementarNumero}>Menos um</button>
      <strong> {numero} </strong>
      <button onClick={incrementarNumero}>Mais um</button>
    </>
  );
};

export default Contador;
