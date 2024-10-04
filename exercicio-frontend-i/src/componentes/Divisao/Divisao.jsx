import './Divisao.css'

const Divisao = (props) => {
    let divisao = props.num1 / props.num2 
    return (
        <>
            <div className="divisao">{props.num1} / {props.num2} = {divisao}</div>
        </>
    )
}

export default Divisao