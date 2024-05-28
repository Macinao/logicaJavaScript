function verificaPrimeiroIgualUltimo(lista) {
    if (lista.length == 0) {
        return console.log(false);

    } else if(lista[0] == lista[lista.length - 1]){
        return console.log(true);

    } else{
        return console.log(false);

    }
}

verificaPrimeiroIgualUltimo([10, 20, 30]); 
verificaPrimeiroIgualUltimo([10, 20, 30, 10]); 
verificaPrimeiroIgualUltimo([20, 20, 20]); 