import './VerificarIdade.css'

const VerificarIdade = (props) => {
    if(props.idade>=18){
    return (
            <>
            <div className="maiorIdade">{props.idade} anos, é maior de idade.</div>   
        </>
    )}else{
    return (
        <>
            <div className='menorIdade'>{props.idade} anos, é menor de idade.</div> 
        </>
    )}
}

export default VerificarIdade