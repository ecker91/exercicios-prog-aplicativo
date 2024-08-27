function ex13(){
    let cont = 1

    let numero_ex13 = Number(prompt('Digite um número inteiro: '))
    
    while(cont<=10){
        let tabuada = numero_ex13*cont
        console.log(numero_ex13+' x '+cont+' = '+tabuada)
        cont++
    }
}