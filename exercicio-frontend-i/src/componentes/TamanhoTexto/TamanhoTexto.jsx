import './TamanhoTexto.css'

const TamanhoTexto = (props) => {
    let tamanho = props.texto
    tamanho = tamanho.length 
    return (
        <>
            <div className="tamanhoTexto">O texto possui {tamanho} caracteres.</div>
        </>
    )
}

export default TamanhoTexto