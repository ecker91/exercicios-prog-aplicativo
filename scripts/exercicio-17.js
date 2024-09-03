function ex17(){
    for(i=0; i<usuarios.length; i++){
        if(usuarios[i].idade <= 18 && usuarios[i].temAnimalEstimacao == true){
            console.log(usuarios[i].nome)
        }
    }
}