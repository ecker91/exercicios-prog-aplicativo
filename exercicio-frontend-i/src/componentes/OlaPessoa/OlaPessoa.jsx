import './OlaPessoa.css'

const OlaPessoa = (props) => {
    return (
        <>
            <div className='olaPessoa'>Olá, {props.nome}!</div>        
        </>
    )
}

export default OlaPessoa