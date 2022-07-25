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

    console.log(result);
    return result;
}

function performOneVowelCount(inputstring) {
    inputstring = inputstring.toLowerCase();

    const vowelcounts = {
        numA: 0,
        numE: 0,
        numI: 0,
        numO: 0,
        numU: 0
    };

    const vowellist = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < inputstring.length; i++) {
        if (vowellist.includes(inputstring[i])) {
            switch (inputstring[i]) {
                case "a":
                    vowelcounts.numA += 1;
                    break;
                case "e":
                    vowelcounts.numE += 1;
                    break;
                case "i":
                    vowelcounts.numI += 1;
                    break;
                case "o":
                    vowelcounts.numO += 1;
                    break;
                case "u":
                    vowelcounts.numU += 1;
                    break;
            }
        }
    }

    return vowelcounts
}

function loopAgain() {
    console.log("Perform another operation? Y/N: ");
    another = readline.prompt().toUpperCase();
    switch (another) {
        case "Y":
            break;
        case "N":
            x = false;
            break;
        default:
            console.log("Not a valid answer");
            loopAgain();
    }
}

function selectFunction() {
    console.log("Perform vowel count or arithmetic calculation? V/A: ")
    userselection = readline.prompt().toUpperCase()
    switch (userselection) {
        case "V":
            return userselection;
        case "A":
            return userselection;
        default:
            console.log("Not a valid answer");
            selectFunction();
    }
}

var x = true;

printWelcomeMessage();

while (x) {
    choice = selectFunction();
    if (choice == "V") {
        console.log("Enter string to vowel count: ");
        userstring = readline.prompt();

        counts = performOneVowelCount(userstring);
        console.log(counts);
    } else if (choice == "A") {
        performOneCalculation();
    }
    loopAgain();
}
    
