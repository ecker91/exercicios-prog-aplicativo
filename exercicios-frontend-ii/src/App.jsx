import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import CalculoIMC from "./componentes/CalculoIMC/CalculoIMC";
import CambioDolar from "./componentes/CambioDolar/CambioDolar";
import CambioEuro from "./componentes/CambioEuro/CambioEuro";
import Contador from "./componentes/Contador/Contador";
import Diminuir from "./componentes/Diminuir/Diminuir";
import Dividir from "./componentes/Dividir/Dividir";
import Multiplicar from "./componentes/Multiplicar/Multiplicar";
import Somar from "./componentes/Somar/Somar";

function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado BotaoContador que contém um botão com a
        descrição "Contador é: xx", ao clicar no botão o número deve ser
        incrementado em 1, conforme exemplo:
      </span>
      <br />
      <BotaoContador />
      <hr />
      <span>
        2. Crie um componente chamado Contador que contém dois botões, um para
        somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre
        o valor atual no meio entre os dois botões, conforme exemplo:
      </span>
      <br />
      <Contador />
      <hr />
      <span>
        3. Crie um componente chamado Somar que contém dois campos tipo
        numérico, e um botão "Somar" que ao ser clicado deve somar os dois
        valores e mostrar o resultado, conforme exemplo:
      </span>
      <br />
      <Somar />
      <hr />
      <span>
        4. Crie um componente chamado Diminuir que contém dois campos tipo
        numérico, e um botão "Diminuir" que ao ser clicado deve diminuir os dois
        valores e mostrar o resultado, conforme exemplo:
      </span>
      <br />
      <Diminuir />
      <hr />
      <span>
        5. Crie um componente chamado Multiplicar que contém dois campos tipo
        numérico, e um botão "Multiplicar" que ao ser clicado deve multiplicar
        os dois valores e mostrar o resultado, conforme exemplo:
      </span>
      <br />
      <Multiplicar />
      <hr />
      <span>
        6. Crie um componente chamado Dividir que contém dois campos tipo
        numérico, e um botão "Dividir" que ao ser clicado deve multiplicar os
        dois valores e mostrar o resultado, conforme exemplo:
      </span>
      <br />
      <Dividir />
      <hr />
      <span>
        7. Considere o valor do dólar igual a R$5,00. Crie um componente chamado
        CambioDolar que contém dois campos tipo numérico, ao ser digitado a
        valor em real deve ser calculado o valor em dólar e o contrário também
        deve ocorrer, conforme exemplo:
      </span>
      <br />
      <CambioDolar />
      <hr />
      <span>
        8. Considere o valor do euro igual a R$5,50. Crie um componente chamado
        CambioEuro que contém dois campos tipo numérico, ao ser digitado a valor
        em real deve ser calculado o valor em euro e o contrário também deve
        ocorre, conforme exemplo:
      </span>
      <br />
      <CambioEuro />
      <hr />
      <span>
        9. Considere a fórmula do IMC = peso / (altura * altura) e status: menor
        de 18.5 = "Abaixo do peso", menor de 25 = "Peso normal", menor de30 =
        "Sobrepeso" e acima de 30 = "Obeso" . Crie um componente chamado
        CalculoIMC que contém dois campos tipo numérico, e um botão "Calcular
        IMC" que ao ser clicado deve fazer o cálculo e mostrar o resultado,
        conforme exemplo:
      </span>
      <br />
      <CalculoIMC />
      <hr />
    </>
  );
}

export default App;
