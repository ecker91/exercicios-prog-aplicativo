function ex10(){
    function string(x){
        if(x.length <= 5){
            console.log(`A string ${x} é pequena.`)
        }else if(x.length<= 10){
            console.log(`A string ${x} é média.`)
        }else{
            console.log(`A string ${x} é grande.`)
        }
    }
    let string_ex10 = prompt('Digite um string: ')
    string(string_ex10)
}