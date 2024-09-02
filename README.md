# PRG1-pair-programming-RegEx


## Some sample Regular expressions to have a play with

```js
const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;
const validFloatingPoint2DP = /^[0-9]+\.[0-9][0-9]$/;
const validAlphabeticString = /^[A-Za-z]+$/;


// Use the test method to check whether something matches the rules. 
console.log(validWholeNumberRegEx.test(456))
```

## Create three functions that check specific pieces of data.

* e.g. 1. A name; 2. An age; 3. A height.

```js
let personName = "123abc"   // should return false;
let personAge = 15.5 // should this be allowed?
let personHeight = "blah blah blah" // should this be allowed?

// Other regex methods do exist such as match() (which looks for matching
// characters) and replace() (which replaces characters), but test is 
// probably the most commonly used and the one you should use here.
```
