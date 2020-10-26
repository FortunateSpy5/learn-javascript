// ALERT
alert("Hello World"); // Causes alert pop up

// PROMPT
let input = prompt("Enter a number"); // Input prompt pop up

// CONSOLE.LOG
console.log("Hello World"); // Logs Hello World to console. Very useful for debugging purposes.


// ########
// VARIABLE
// ########

let age = 20; // Creates a variable 'age' with value 20. A variable can hold any type of data, even functions.
console.log(age); // Will log 20 to console.
// NAMING CONVENTION: camelCase -> Eg. firstName, getUserScore
// Variable names cannot start with number. They can only contain alphanumeric characters, $ and _
// Variable names cannot be reserved keywords.
// Variables start with uppercase in only very specific cases like Classes, React Components, etc.
// Variables used to store constant values (eg. pi) are all uppercase


// ####################
// PRIMITIVE DATA TYPES
// ####################

// Javascript has dynamic typing -> Data type doesn't need to be defined, it is determined automatically.
// In JS, variable doesn't have any type only value has a type.
// 1. NUMBER -> Floating point (both decimal and integers are floating point values)
let num = 10;
// 2. STRING -> Text (Sequence of characters)
let firstName = "Michael"; // Always use single or double quotes
// 3. BOOLEAN -> true / false (useful for decision making)
let flag = true;
// 4. Undefined -> Variable declared but not defined
let val;
console.log(val) // Logs undefined
// 5. Null -> Empty value
let anotherVal = null;
// 6. Symbol (ES2015) -> Value that is unique and cannot be changed
// Check https://developer.mozilla.org/en-US/docs/Glossary/Symbol for details
// 7. BigInt (ES2020) -> Larger int than Number type
// Check https://developer.mozilla.org/en-US/docs/Glossary/BigInt for details
// Due to dynamic typing, variables can be reassigned to a different data type
firstName = true;


// #######
// TYPE OF
// #######

// Gives data type of variable
console.log(typeof "Hello"); // String
console.log(typeof num); // Number
// typeof undefined is undefined
// typeof null is returned as object (bug)


// ########
// COMMENTS
// ########

// Single Line Comment
/*
Multiline
Comment
*/


// ###############
// LET, CONST, VAR
// ###############

// LET -> let is mutable and can be reassigned a different value.
let personAge = 10;
personAge = 20; // This is valid
// CONST -> const is immutable and cannot be reassigned.
const daysInWeek = 7;
// daysInWeek = 10 is invalid and will cause error.
// const has to be initialized. Eg. const daysInWeek; will cause error.
// ALWAYS USE CONST as much as possible unless absolutely sure that let is necessary.
// VAR -> used before ES2015
// Similar to let but has different scope. Var is function scoped. Let is block scoped.


// #########
// OPERATORS
// #########

// Arithmetic: +, -, /, *, ** (power: 3 ** 2 -> 9), % (modulus)
// String concatenation: "A" + "B" -> "AB"
// Assignment: +=, -=, *=, /=, %=, **=, ++ (x++ -> x = x + 1), --
let x = 25;
x -= 16 // x is now 9
x++; // x is now 10
x **= 2 // x = 10 ** 2 -> 100
console.log(x) // 100
// Comparison: >, <, >=, <=


// ##########
// PRECEDENCE
// ##########

// Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence for details


// #################
// TEMPLATE LITERALS
// #################

const name = "John";
const birthYear = 1992;
const sentence = `${name} is ${2020 - birthYear} years old`; // John is 28 years old
console.log(`Hello
World`); // Multiline string without escape sequence


// ###############
// DECISION MAKING
// ###############

// IF, ELSE IF, ELSE
const value = 10;
if (value < 10) {
    console.log("Less than 10")
} else if (value > 10) {
    console.log("Greater than 10");
} else {
    console.log("Equal to 10 or undefined");
}


// ##########################
// TYPE CONVERSION & COERCION
// ##########################

// Conversion - Explicit
const inputYear = "2000";
console.log(Number(inputYear))
// Number("A") -> NaN -> Not a number -> Invalid number (Type is still Number)

// Coercion - Implicit
// Type coercion occurs when any operator is dealing with values of two types
console.log("2000" + 20) // 20020
console.log("2000" - 20 + 10) // 1990


// ################
// TRUTHY AND FALSY
// ################

// Falsy Values -> Will be converted to false on boolean conversion
// Falsy Values: 0, '', undefined, null, NaN

// Truthy Values -> Will be converted to truth on boolean conversion
// Truthy Values: Everything other than the five falsy is truthy


// #################
// EQUALITY OPERATOR
// #################

// *** ALWAYS USE THIS ***
// === -> Strict Equality Operator
console.log(10 === "10"); // false

// == -> Loose equality operator -> Performs type coercion
console.log(10 == "10"); // true


// #################
// LOGICAL OPERATORS
// #################

// AND -> &&
console.log(true && false) // false

// OR -> ||
console.log(true || false) // true

// NOT -> !
console.log(!true) // false


// ################
// SWITCH STATEMENT
// ################

const number = 2
switch (number) {
    case 1:
        console.log("One");
        break;
    case 2:
    case 3:
        console.log("Two or Three");
        break;
    default:
        console.log("Other");
}
// Output will be Two or Three
/*
Equivalent if statement
if (number === 1) {
    console.log("One");
} else if (number === 2 || number === 3) {
    console.log("Two or Three");
} else {
    console.log("Other");
}
*/


// ################
// Ternary Operator
// ################

// condition ? statement / expression for true : statement / expression for false
const ageValue = 23;
console.log(ageValue >= 18 ? 'Adult' : 'Not adult')
// OR
ageValue >= 8 ? console.log('Adult') : console.log('Not adult') // NOT USED