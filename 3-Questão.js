function verifica50(num1,num2){

    valor = num1 + num2;

    if(num1 == 50){
        return true;

    } else if(num2 == 50){
        return true;

    } else if(valor == 50){
        return true

    } else {
        return false;

    }
}

num1 = 50;
num2 = 50;

console.log(verifica50(num1,num2))

num3 = 20;
num4 = 50;

console.log(verifica50(num3,num4))

num5 = 20;
num6 = 20;

console.log(verifica50(num5,num6))

num7 = 20;
num8 = 30;

console.log(verifica50(num7,num8))