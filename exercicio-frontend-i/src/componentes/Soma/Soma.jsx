import './Soma.css'

const Soma = (props) => {
    let soma = props.num1 + props.num2 
    return (
        <>
            <div className="soma">{props.num1} + {props.num2} = {soma}</div>
        </>
    )
}

export default Soma