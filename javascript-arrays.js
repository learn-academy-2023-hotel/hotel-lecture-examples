// JavaScript Arrays 10/12/2023

// Primitive data type - can't be broken down any more
// Data type - predefined classification of information, building blocks of a programming language
// 6 primitive data types - number, boolean, null, undefined, string, symbol
// collection - array
// array is a data type that is a collection of things

// property of a data type - what makes data types different from each other
// behavior of a data type - what we can do with the data type

// 5 + 6
// 11
// "hello".toUpperCase()
// 'HELLO'
// 5.toUpperCase()
// VM306:1 Uncaught SyntaxError: Invalid or unexpected token
// "hello" + "!"
// 'hello!'
// "hello" - "o"
// NaN

// + applied to numbers performs addition
// + applied to strings performs concatenation

// Abstraction - all variables represent data
// var myNum = 7
// undefined
// myNum
// 7
// 7
// 7
// myNum === 7
// true
// myNum.toUpperCase()
// VM547:1 Uncaught TypeError: myNum.toUpperCase is not a function
//     at <anonymous>:1:7
// (anonymous) @ VM547:1
// var myOtherNum = 3 + 4
// undefined
// myOtherNum
// 7
// myNum === myOtherNum
// true

// [] - this is a valid array, arrays are defined by square brackets
// console.log([])

// array of one thing
// console.log([4])
// --> [ 4 ]

// console.log([true])
// --> [ true ]

// console.log([4, true])
// --> [ 4, true ]

// console.log([4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]])
// --> [ 4, true, null, 'hello!', 'yo', 4, 5, 6, [ 5, 6 ] ]

// console.log([].length)
// --> 0

// console.log([4, true].length)
// --> 2

// console.log([4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]].length)
// --> 9


// console.log([4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]][0])
// --> 4

// console.log([4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]][3])
// --> hello!

// length - the number of items in the array
// index - the placement of the elements, zero-index

// var myArray = [4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]]
// console.log(myArray[8])
// --> [ 5, 6 ]

// console.log(myArray[8][0])
// --> 5

// TypeOf - JavaScript operator
// typeof 9
// 'number'
// myNum
// 7
// typeof myNum
// 'number'
// typeof [3, 4, 5, 6, 9].length
// 'number'
// typeof [ true, "hello", "yo"].length
// 'number'


// var myArray = [4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]]
// console.log(myArray[3])
// --> hello!
// console.log(myArray[3].toUpperCase())
// --> HELLO!

// myArray[3] = myArray[3].toUpperCase()
// console.log(myArray)
// --> [ 4, true, null, 'HELLO!', 'yo', 4, 5, 6, [ 5, 6 ] ]



var myArray = [4, true, null, "hello!", "yo", 4, 5, 6, [5, 6]]
// myArray.pop() // removes last item from the array
// console.log(myArray)
// --> [ 4, true, null, 'hello!', 'yo', 4, 5, 6 ]

// console.log(myArray.pop())
// --> [ 5, 6 ]

// myArray.push("hey hotel!") // adds an item to the end of the array, always takes an argument
// console.log(myArray)
// --> [ 4, true, null, 'hello!', 'yo', 4, 5, 6, [ 5, 6 ], 'hey hotel!' ]

// myArray.reverse() // flips the order of the elements
// console.log(myArray)
// --> [ [ 5, 6 ], 6, 5, 4, 'yo', 'hello!', null, true, 4 ]

// myArray.slice(2, 5)
// console.log(myArray)
// --> [ 4, true, null, 'hello!', 'yo', 4, 5, 6, [ 5, 6 ] ]

// mutator methods - change the data they are acting on
// accessor methods - don't change the data they are acting on

// console.log(myArray.slice(2, 5))
// --> [ null, 'hello!', 'yo' ]
// var mySubset = myArray.slice(2, 5)
// console.log(mySubset)
// --> [ null, 'hello!', 'yo' ]

// Reverse the characters the string "hello"
var greeting = "hello"

// greeting.reverse()
// TypeError: greeting.reverse is not a function
// console.log(greeting)

// var stringToArray = greeting.split()
// console.log(stringToArray) 
// --> [ 'hello' ]

// var stringToArray = greeting.split("")
// console.log(stringToArray) 
// --> [ 'h', 'e', 'l', 'l', 'o' ]

// stringToArray.reverse()
// console.log(stringToArray) 
// --> [ 'o', 'l', 'l', 'e', 'h' ]

// var arrayToString = stringToArray.join()
// console.log(arrayToString)
// --> o,l,l,e,h

// var arrayToString = stringToArray.join("")
// console.log(arrayToString)
// --> olleh


var greeting = "hello"
var reversedString = greeting.split("").reverse().join("")
console.log(reversedString)
// --> olleh


// this didn't work
// greeting.split("").reverse().join("")
// console.log(greeting)
// --> hello