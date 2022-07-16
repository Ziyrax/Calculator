const readline = require('readline-sync');

console.log('Welcome to the calculator!\n');

console.log('Enter operation (+, -, /, or *): ');
const operator = readline.prompt();

console.log('Enter first value: ');
const response1 = +readline.prompt();
console.log('Enter second value: ');
const response2 = +readline.prompt();

var result;

if (operator == "+") {
    result = response1 + response2;
} else if (operator == "-") {
    result = response1 - response2;
} else if (operator == "*") {
    result = response1 * response2;
} else if (operator == "/") {
    result = response1 / response2;
} else {
    result = "not a valid operation"
}

console.log(result)