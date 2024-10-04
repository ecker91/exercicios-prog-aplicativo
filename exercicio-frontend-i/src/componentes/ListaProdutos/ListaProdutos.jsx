import './ListaProdutos.css'

const ListaProdutos = (props) => {
    return (
        <>  
            <div className="listaProdutos">
                <ul>
                    {props.produtos.map((produto) =>(
                        <li key={produto}>{produto}</li>
                    ))}                    
                </ul>
            </div>
        </>
    )
}

export default ListaProdutos