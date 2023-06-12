function additionFunction(valueOne, valueTwo){
    console.log(valueOne + valueTwo);
    return valueOne + valueTwo;

}

function subtractFunction(valueOne, valueTwo){
    console.log(valueOne - valueTwo);
    return valueOne - valueTwo;
}

function multiplyFunction(valueOne, valueTwo){
    console.log(valueOne * valueTwo);
    return valueOne * valueTwo;
}

function divideFunction(valueOne, valueTwo){
    console.log(valueOne / valueTwo);
    return valueOne / valueTwo;
}

function operate(firstNumber, operation, secondNumber){
    if (operation === "+") {
        return additionFunction(firstNumber, secondNumber);
    } if (operation === "-") {
        return subtractFunction(firstNumber, secondNumber);  
    } if (operation === "*") {
        return multiplyFunction(firstNumber, secondNumber);
    } if (operation === "/") {
        return divideFunction(firstNumber, secondNumber);
    }

}

// additionFunction(2,4);
// subtractFunction(-1, 4);
// multiplyFunction(-2, 4);
// divideFunction(-2, 4);


let firstNumber = "";
let operation = "";
let secondNumber = "";