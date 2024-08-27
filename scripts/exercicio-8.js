function ex8(){
    let frutas = ['maçã', 'banana', 'laranja']
    for(i=0; i<frutas.length; i++){
        console.log(frutas[i])
    }
    frutas.push('melancia')
    for(i=0; i<frutas.length; i++){
        console.log(frutas[i])
    }
    frutas.pop(frutas.length)
    for(i=0; i<frutas.length; i++){
        console.log(frutas[i])
    }   
}