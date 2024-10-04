import './NumerosImpares.css'

const NumerosImpares = (props) => {

    let numeros = props.numeros.filter( numero => numero%2 == 1)
    return (
        <>
            <div className="numerosImpares">
                <ul>
                    {numeros.map((numero) =>(
                        <li key={numero}>{numero}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosImpares