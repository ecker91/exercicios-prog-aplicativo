import { useState } from "react";

const RemoverNome = () => {
  const [nomes, setNomes] = useState([
    "Fulano",
    "Ciclano",
    "Beltrano",
    "Maria",
    "Pedro",
  ]);

  const removerNome = (index) => {
    nomes.splice(index, 1);
    setNomes([...nomes]);
  };
  return (
    <ul>
      {nomes.map((nome, index) => {
        return (
          <li key={index}>
            {nome}
            <button onClick={removerNome}>Remover</button>
          </li>
        );
      })}
    </ul>
  );
};

export default RemoverNome;
