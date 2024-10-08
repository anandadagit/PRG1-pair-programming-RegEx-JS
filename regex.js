// Module for user input
const readlineSync = require('readline-sync');


//Some sample Regular expressions to have a play with

const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;
const validFloatingPoint2DP = /^[0-9]+\.[0-9][0-9]$/;
const validAlphabeticString = /^[A-Za-z]+$/;



// Use the test method to check whether something matches the rules. 
console.log(`456 is a whole number: ${validWholeNumberRegEx.test(456)}`);
console.log(`456.5 is a whole number: ${validWholeNumberRegEx.test(456.5)}`);
console.log(validWholeNumberRegEx.test(456))
console.log(validWholeNumberRegEx.test("4"))
console.log(validWholeNumberRegEx.test(4.4))
console.log(validWholeNumberRegEx.test("error"))


/*console.log(`45.46 is floating point number with two dps: ${validFloatingPoint2DP.test(45.46)}`);
console.log(`45.462 is floating point number with two dps: ${validFloatingPoint2DP.test(45.462)}`);


console.log(`45.46 is an alphabetic string: ${validAlphabeticString.test(45.46)}`);
console.log(`anand is an alphabetic string: ${validAlphabeticString.test("anand")}`);*/






// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height. 




// Other regex methods do exist such as match() (which looks for matching
// characters) and replace() (which replaces characters), but test is 
// probably the most commonly used and the one you should use here.



// Example code from the lesson slides:

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function emailValidity(email) {
  return emailRegex.test(email);
}

userEmail = "steve@bob.com";
console.log(`steve@bob.com is a valid email: ${emailValidity(userEmail)}`);
console.log(`s@b.co is a valid email: ${emailValidity("s@b.co")}`);
console.log(`s@b.c is a valid email: ${emailValidity("s@b.c")}`);


function validInput(input){
    const AtoZAndSpaceRegex = /^[A-Za-z]+$/;
    return AtoZAndSpaceRegex.test(input)
}

while (true) {
    let userInput = readlineSync.question("Please enter alpha characters only: ");
    if (validInput(userInput)) {
       console.log("Thank you. Please continue.");
         break;
    }
    else {
       console.log("Incorrect input.");
   }
}