function verificaVerdadeFalso(num1,num2){
    if(num1 < 0 && num2 > 0){
        return true;

    } else if(num2 < 0 && num1 > 0){
        return true;

    } else {
        return false;

    }
}

var num1 = 2;
var num2 = 2;

console.log(verificaVerdadeFalso(num1,num2))

var num3 = -2;
var num4 = 2;

console.log(verificaVerdadeFalso(num3,num4))

var num5 = 2;
var num6 = -2;

console.log(verificaVerdadeFalso(num5,num6))

var num7 = -2;
var num8 = -2;

console.log(verificaVerdadeFalso(num7,num8))