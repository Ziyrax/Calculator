const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Enter first value to be multiplied: ');
const response = readline.prompt();
console.log('Enter second value: ');
const response2 = readline.prompt();

var product = response * response2
console.log('Product is ' + product)