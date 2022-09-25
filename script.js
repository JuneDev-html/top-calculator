// ADD function
const add = (a, b) => Number(a) + Number(b);


// SUBTRACT function
const subtract = (a, b) => Number(a) - Number(b);


// DIVIDE function
const divide = (a, b) => Math.round(Number(a) / Number(b) * 100 ) / 100;


// MULTIPLY function
const multiply = (a, b) => Number(a) * Number(b);

// operate function takes in input and decides which operation to activate
const operate = (numOne, operator, numTwo) => {
    if (operator === '+') {
        return add(numOne, numTwo);
    }
    else if (operator === '-') {
        return subtract(numOne, numTwo);
    }
    else if (operator === '/') {
        return divide(numOne, numTwo);
    }
    else if (operator === "*") {
        return multiply(numOne, numTwo);
    }
}

