import './Subtracao.css'

const Subtracao = (props) => {
    let subtracao = props.num1 - props.num2 
    return (
        <>
            <div className="subtracao">{props.num1} - {props.num2} = {subtracao}</div>
        </>
    )
}

export default Subtracao