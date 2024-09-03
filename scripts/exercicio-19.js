function ex19(){
    for(i=0; i<numeros.length; i++){
        if(numeros[i]%3==0 && numeros[i]%5==0){
            numeros[i] = 'FizzBuzz'
        }else if(numeros[i]%3==0){
            numeros[i] = 'Fizz'
        }else if(numeros[i]%5==0){
            numeros[i] = 'Buzz'
        }
    }
    console.log(numeros)
}