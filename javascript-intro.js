// JavaScript Intro Notes 10/11/2023

// - logical thinking of program
// - user interaction
// - language of the web

// Technically:
//  dynamically-typed - data types can change
//  interpreted language - read by browser and interpreted at runtime
//  scripting language - runs top to bottom, executed at runtime

//  DATA TYPES

//  Primative -
//  building blocks of JavaScript

// Composite -
//  made up of other data types

// console.log(4 + 2)
// // to run js file:  node filename + extension

// //  - Numbers
// console.log(4 + 2)
// console.log(4 * 2)
// console.log(4 - 2)
// console.log(4 / 2)
// console.log(4 ** 2)

// Modulo - divides the first number by the second number and outputs the REMAINDER
// %
// console.log(4 % -2) // output 0
// console.log(-7 % 3) // outputs 1
//  - Strings

// // STRINGS
// console.log("hello world")
// console.log("4")
// console.log("It look cold and gloomy out right now")

// // String concatenation - combines strings into one string
// console.log("Hello" + "World")

// console.log("36" + 36)
// type coercion  - changes the data type to perform the operation

//  - Boolean
//  true or false, they are not strings

//  - Undefined
// variable has been declared but no value assigned
var animal

//  - Null
//   is nothing, it lacks value

//  - Symbol
//   accessing keys in JS objects

//  VARIABLES

// var - global variable, seen and used anywhere in the program
//  - value can be reassigned

// declaration:  var, let , const
//  variable name - camelCase  example: myFavoriteNumber
//  Assignment operator ->    = equal sign
//  assigned value - what value is used when the variable is called/used

// Example:
var myFavoriteNumber = 42
// console.log(myFavoriteNumber)
// console.log(36 + myFavoriteNumber)

// myFavoriteNumber = 15
// console.log(myFavoriteNumber)

// console.log(myFavoriteNumber + myFavoriteNumber)

// String Properties and Built-in Methods

var message = "Hello Hotel!"
// length property

// .length // how many character are in the string (includes spaces)

console.log(message.length)

// index  tells us location of each character in the string
//  computers use zero-index

//  Bracket Notation!  access value at specific index
// console.log(message[0]) //-- output: H
// console.log(message[3]) // -- output l
// console.log(message[8])

// Built in methods end in parentheses
console.log(message.charAt(8)) // returns value at particular index

// includes("lo")  // looks for subset and returns boolean

console.log(message.includes("lo")) // true
console.log(message.includes("Lo")) //  false
