// ADD function
const add = (a, b) => Number(a) + Number(b);
console.log(`Add 2 + 2: ${add(2, 2)}`);

// SUBTRACT function
const subtract = (a, b) => Number(a) - Number(b);
console.log(`Subtract 3 - 5: ${subtract(3, 5)}`);

// DIVIDE function
const divide = (a, b) => Math.round(Number(a) / Number(b) * 100 ) / 100;
console.log(`Divide 2 / 3: ${divide(2, 3)}`);

// MULTIPLY function
const multiply = (a, b) => Number(a) * Number(b);
console.log(`Multiply 5 * 2: ${multiply(5, 2)}`);

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

console.log(`Operator = Add 2 + 2: ${operate(2, "+", 2)}`);
console.log(`Operator = Subtract 5 - 3: ${operate(5, "-", 3)}`);
console.log(`Operator = divide 10 / 2: ${operate(10, "/", 2)}`);
console.log(`Operator = Multiply 3 * 2: ${operate(3, "*", 2)}`);


