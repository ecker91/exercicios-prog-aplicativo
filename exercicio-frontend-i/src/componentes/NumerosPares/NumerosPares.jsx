import './NumerosPares.css'

const NumerosPares = (props) => {

    let numeros = props.numeros.filter( numero => numero%2 == 0)
    return (
        <>
            <div className="numerosPares">
                <ul>
                    {numeros.map((numero) =>(
                        <li key={numero}>{numero}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosPares