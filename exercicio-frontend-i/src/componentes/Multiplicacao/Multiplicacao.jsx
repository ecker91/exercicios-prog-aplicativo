import './Multiplicacao.css'

const Multiplicacao = (props) => {
    let multiplicacao = props.num1 * props.num2
    return (
        <>
            <div className="multiplicacao">{props.num1} * {props.num2} = {multiplicacao}</div>
        </>
    )
}

export default Multiplicacao