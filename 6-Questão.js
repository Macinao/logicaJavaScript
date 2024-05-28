function estaEmOrdemCrescente(array) {

    if (array.length <= 1) {
        return true;
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }

    return true;
}


console.log(estaEmOrdemCrescente([1, 2, 3]));
console.log(estaEmOrdemCrescente([1, 2,-3]));
console.log(estaEmOrdemCrescente([1.1, 1.2, 1.3]));

