function ex11(){
    let carro = {
        marca: 'Hyundai',
        modelo: 'HB20',
        ano: 2020
    }
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\nano: ${carro.ano}`)
    carro.cor = 'Branco'
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\nano: ${carro.ano}\ncor: ${carro.cor}`)
    delete carro.ano
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\ncor: ${carro.cor}`)
}