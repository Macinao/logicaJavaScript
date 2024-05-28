function somaValores() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somaValores(15, 13, 10));
console.log(somaValores(5, 8)); 
console.log(somaValores(25, 30, 10, 80, 15, 22));
