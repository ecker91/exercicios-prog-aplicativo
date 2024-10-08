import './NomesOrdenados.css'

const NomesOrdenados = (props) => {
    let nomes = props.nomes.sort()
    return (
        <>
            <div className="nomesOrdenados">
                <ol>
                    {nomes.map((nome) => 
                        <li key={nome}>{nome}</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default NomesOrdenados