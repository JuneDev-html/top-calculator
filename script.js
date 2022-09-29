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
    else if (operator === '/') { // or operator === '÷'
        return divide(numOne, numTwo);
    }
    else if (operator === "*") { // or operator === 'x'
        return multiply(numOne, numTwo);
    }
}

// ------ ------- BUTTON FUNCTIONS ------ --------\

const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.mainDisplay');
const trackerDisplay = document.querySelector('.trackerDisplay');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equalsButton');
const allClear = document.querySelector('.ac');
const decimal = document.querySelector('.decimal');
const negative = document.querySelector('.negative');

let tempNum;
let firstValue;
let currOperator;
let secondValue;
let total;
let addingNums = true;
let deciClick = false;
let equalsOn = false;


// populate display function
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        // if you werent adding numbers (and it equals false) that means you were just adding an operator
        // in which case you should clear the display and start accruing a new value
        // addingNum "light switch" is currently off
        if (!addingNums) {
            display.textContent = '';
        }
        if (equalsOn) {
            firstValue = '';
            firstValue = '';
            total = '';
            tempNum = ''; 
            equalsOn = false;
        }
        // turn addingNum "light switch" on to signal you are currently adding numbers
        // then it doesnt clear your display with every click
        addingNums = true;
        // everytime a number is clicked, add the number to display
        display.textContent += e.target.textContent;
        // then add whatever is in display to a temporary number 
        tempNum = display.textContent;
        console.log(tempNum);
    });
});

decimal.addEventListener('click', (e) => {
    if (!deciClick) {
        if(!addingNums) {
            display.textContent = '';
        }
        deciClick = true;
        addingNums = true;
        display.textContent +=e.target.textContent;
        tempNum = display.textContent;
    }
});

// Clear Button function
clear.addEventListener('click', () => {
    display.textContent = '';
    // trackerDisplay.textContent = '';
    deciClick = false;
});

// Clear All Button function
allClear.addEventListener('click', () => {
    display.textContent = '';
    firstValue = '';
    currOperator = '';
    secondValue = '';
    total = '';
    tempNum = '';
    trackerDisplay.textContent = '';
    addingNums = true;
    deciClick = false;
});


// save firstValue and operator value function 
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        // if we dont already have a firstValue, add current number to firstValue
        if (!currOperator) {
            if (equalsOn) {
                equalsOn = false;
            }
            addingNums = false; // turn addingNum "light switch" off to signal you are no longer adding numbers to display
            if (total) {
                firstValue = total;
            }
            else {
                firstValue = tempNum;    
            }    
            tempNum = '';
            currOperator = event.target.value;
            deciClick = false;
            trackerDisplay.textContent = `${firstValue}`;  
        }
        else if (currOperator) {
            addingNums = false; // turn addingNum "light switch" off to signal you are no longer adding numbers to display
            secondValue = tempNum;
            firstValue = operate(firstValue, currOperator, secondValue);
            currOperator = event.target.value;
            secondValue = '';
            deciClick = false;
            trackerDisplay.textContent = ` ${firstValue}`;  
        }
        
        // if we have a firstValue, complete first equation with current number as secondValue  
    })
});

// function for Equal Button 
equals.addEventListener('click', (event) => {
    if (firstValue) {
        equalsOn = true;
        addingNums = false; // turn addingNum "light switch" off to signal you are no longer adding numbers to display
        secondValue = tempNum;
        // store result in firstValue for it to be used in possible proceding operations
        total = operate(firstValue, currOperator, secondValue); 
        // display end value of operation
        trackerDisplay.textContent = '';
        display.textContent = total;
        // firstValue = '';
        // firstValue = '';
    
    
        // total = '';
        // tempNum = '';
    
        
        currOperator = '';
        secondValue = '';
        deciClick = false;
        console.log(`total: ${total} currOperator: ${currOperator}`);  
    }
});

negative.addEventListener('click', () => {
    display.textContent = display.textContent * -1;
    tempNum = display.textContent;
});





