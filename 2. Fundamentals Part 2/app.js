// #########
// FUNCTIONS
// #########

// Functions can be called before declaration
logger() // Logs 'My name is Arthur' to console

function logger() {
    console.log('My name is Arthur');
}

// Calling, running, invoking (can be done multiple times)
logger() // Logs 'My name is Arthur' to console

// Parameterized
function add(first, second) {
    console.log(first + second);
}

add(10, 19) // Logs '29' to console

// Return
function add2(first, second) {
    return first + second;
}

add2(10, 19) // Does nothing
console.log(add2(10, 19)) // Logs '29' to console

// FUNCTION EXPRESSION
// In JS functions are considered values and hence can be stored in a variable
// Function expressions cannot be called before declaration
// Here, console.log(calcAge(1992)); will cause error
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}
console.log(calcAge(1992)); // Logs 28 to console

// Functions can call other functions

// ARROW FUNCTIONS
const calcAge2 = birthYear => 2020 - birthYear;
// No () needed for single parameter
// No return needed for single statement;

const calcAge3 = (birthYear, currentYear) => {
    console.log(birthYear, currentYear);
    return currentYear - birthYear;
}

// Arrow function does not receive 'this'. Will be discussed in a later section.


// ######
// ARRAYS
// ######

// Arrays can contain any data type

// Declaration
const friends = ['Michael', 'Franklin', 'Trevor'];
const years = new Array(1992, 2000, 2020);

// Access Elements
console.log(friends[0]) // Michael
// Index starts from 0.

// Length
console.log(friends.length);

// Modify Element
friends[1] = 'Arthur' // Now, friends = ['Michael', 'Arthur', 'Trevor']


// ###################
// BASIC ARRAY METHODS
// ###################

// Add element at end (push) -> arrrayName.push(newElement);
years.push(2030) // Now, years = [1992, 2000, 2020, 2030]

// Add element at beginning (unshift) -> arrrayName.unshift(newElement);
years.unshift(1980) // Now, years = [1980, 1992, 2000, 2020, 2030]

// Remove element from end (pop) -> arrayName.pop() -> returns popped element
const popped = years.pop() // years = [1980, 1992, 2000, 2020], popped = 2030

// Remove element from end (shift) -> arrayName.shift() -> returns removed element
const shifted = years.shift() // years = [1992, 2000, 2020], shifted = 1980

console.log(years) // [1992, 2000, 2020]

// Find element
console.log(years.indexOf(1992)) // 0
console.log(years.indexOf(2090)) // -1 (not found)

// Check if element in array (ES2015)
console.log(years.includes(2020)) // true
console.log(years.includes(2015)) // false


// #######
// OBJECTS
// #######

const person = {
    firstName: 'Arthur',
    lastName: 'Morgan',
    age: '35',
    job: 'outlaw',
    friends: ['Dutch', 'John', 'Hosea']
}

// Access object properties
console.log(person.firstName);
// or
console.log(person['firstName']); // In this notation, we can use an expression (Eg. conditional)

// Add property
person.location = 'Blackwater';
// or, person['location'] = 'Blackwater';


// #############
// OBJECT METHOD
// #############

const anotherPerson = {
    birthYear: 1992,
    currentYear: 2020,
    calcAge: function () {
        return this.currentYear - this.birthYear;
    },
    calcAge2: () => {
        return this.currentYear - this.birthYear;
    },
    calcAge3: (currentYear, birthYear) => {
        return currentYear - birthYear;
    }
}

console.log(anotherPerson.calcAge2());


// ########
// FOR LOOP
// ########

// Same as C++, Java

for (let i = 0; i < 10; i++) {
    if (i === 5)
        continue;
    // statements after continue will not be executed for that ieration
    if (i === 7)
        break;
    // break will stop the for loop and control will pass to after for loop
    console.log(i);
}
/*
Output:-
0
1
2
3
4
6
*/

// Loops can be nested like any other language


// ##########
// WHILE LOOP
// ##########

let i = 0;
while (i < 10) {
    if (i === 5) {
        i += 1;
        continue;
    }
    if (i === 7)
        break;
    console.log(i);
    i += 1;
}
