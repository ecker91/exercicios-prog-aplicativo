import { useState } from "react";

const AdicionarNome = () => {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  const adicionarNaLista = () => {
    nomes.push(nome);
    setNomes([...nomes]);
  };
  return (
    <>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />{" "}
      <button onClick={adicionarNaLista}>Adicionar</button>
      <br />
      <ul>
        {nomes.map((nome, index) => {
          return <li key={index}>{nome}</li>;
        })}
      </ul>
    </>
  );
};

export default AdicionarNome;
