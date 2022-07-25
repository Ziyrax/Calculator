const readline = require('readline-sync');

function readNumber(message) {
    console.log(message);
    var inputnumber = +readline.prompt()
    if (isNaN(inputnumber)) {
        console.log("Response \"" + inputnumber + "\" is not a number");
        readNumber(message);
    } else {
        return inputnumber;
    }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!\n');
}

function performOneCalculation() {
    console.log('Enter operation (+, -, /, or *): ');
    const operator = readline.prompt();

    response1 = readNumber('Enter first value: ');
    response2 = readNumber('Enter second value: ');

    var result;

    switch (operator) {
        case "+":
            result = response1 + response2;
            break;
        case "-":
            result = response1 - response2;
            break;
        case "*":
            result = response1 * response2;
            break;
        case "/":
            result = response1 / response2;
            break;
        default:
            result = "not a valid operation"
    }

    console.log(result)
    return result
}

function loopAgain() {
    console.log("Perform another calculation? Y/N: ")
    another = readline.prompt()
    switch (another) {
        case "Y":
            break
        case "N":
            x = false
            break
        default:
            console.log("Not a valid answer")
            loopAgain()
    }
}

var x = true;

printWelcomeMessage()

while (x) {
    performOneCalculation()
    loopAgain()
}
    
