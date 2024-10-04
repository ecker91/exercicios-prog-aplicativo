import './Calculadora.css'

const Calculadora = (props) => {
    let resultado
    let operacao
    
    switch (props.operacao) {
        case 'soma':
            operacao = '+'
            resultado = props.num1 + props.num2 
            break
        case 'subtracao':
            operacao = '-'
            resultado = props.num1 - props.num2
            break
        case 'multiplicacao': 
            operacao = '*'
            resultado = props.num1 * props.num2
            break
        case 'divisao':
            operacao = '/'
            resultado = props.num1 / props.num2
            break
    }

    return (
        <>
            <div className="calculadora">{props.num1} {operacao} {props.num2} = {resultado}</div>
        </>
    )
}

export default Calculadora