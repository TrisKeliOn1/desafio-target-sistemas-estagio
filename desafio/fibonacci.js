function isFibonacciNumber(num) {
    if (num < 0) return false; 

    let a = 0, b = 1;

    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === num;
}

const numberToCheck = 21; 

if (isFibonacciNumber(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} NÃO pertence à sequência de Fibonacci.`);
}
