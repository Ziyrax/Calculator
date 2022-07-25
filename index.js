const readline = require('readline-sync');

console.log('Welcome to the calculator!\n');

console.log('Enter operation (+, -, /, or *): ');
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + '? ');
const n_inputs = +readline.prompt();
var inputs = new Array(n_inputs);

var number

for (let i=0; i < inputs.length; i++) {
    console.log('Enter number ' + (i+1) + ': ');
    number = +readline.prompt();
    inputs[i] = number
}

var result = inputs[0]

if (operator == "+") {
    for (let i=1; i < inputs.length; i++) {
        result += inputs[i];
    }
} else if (operator == "-") {
    for (let i=1; i < inputs.length; i++) {
        result = result - inputs[i];
    }
} else if (operator == "*") {
    for (let i=1; i < inputs.length; i++) {
        result = result * inputs[i];
    }
} else if (operator == "/") {
    for (let i=1; i < inputs.length; i++) {
        result = result / inputs[i];
    }
} else {
    console.log("Not a valid operator")
}

console.log(result)