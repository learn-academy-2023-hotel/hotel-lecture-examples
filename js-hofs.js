// JAVASCRIPT HIGHER ORDER FUNCTIONS 10/17/2023

//  Built-in method - premade functions, easily invokable

// console.log(true.toUpperCase())
//  TypeError: true.toUpperCase is not a function

// data type is incorrect for current method

// What is a function  - set of code always returns something
//  default is to return undefined

const example = () => {
  2 + 4
}
// console.log(example)
// [Function: example]

console.log(example())
// undefined  if you forget the return

// Anonymous Functions
// nameless fxns
// () => {}

// Parameter: placeholder for the argument
// Argument: actual values that your passing in as input

// Iteration: instructions executed over and over and over again until a condition is met
// - array, strings

// Syntactical Sugar - large concepts wrapped in easy-to-use syntax; makes functionality 'sweeter'

// HIGHER ORDER Function
// 1. fxn that takes a function as an argument
// 2. built in methods
// 3. more efficient that for loops
// 4. used only in specific circumstances

// .map()
// .filter()
//  Array methods!

// const showArray = [
//   "Changeling",
//   "Bob's Burgers",
//   "Handmaid's Tale",
//   "South Park",
//   "Euphoria",
// ]

// MAP
// - interates over each element, does something to each element (like a for loop)
//  RETURNS A NEW ARRAY OF SAME LENGTH AS ORIGINAL ARRAY
// must assign map to a new variable

// *** All HOFs take anonymous function as an argument

// const result = showArray.map(() => {
//   return "Hey Hotel"
// })
// console.log(result) //[ 'Hey Hotel', 'Hey Hotel', 'Hey Hotel', 'Hey Hotel', 'Hey Hotel' ]

// console.log(showArray)
// [
//   'Changeling',
//   "Bob's Burgers",
//   "Handmaid's Tale",
//   'South Park',
//   'Euphoria'
// ]

// The anon function takes an argument
// the REQUIRED argument is value - value of element at current index ( like array[i] in for loop)

// const result = showArray.map((show) => {
//   return `You like the show ${show}`
// })
// console.log(result)
// [
//   "You like the show Changeling",
//   "You like the show Bob's Burgers",
//   "You like the show Handmaid's Tale",
//   "You like the show South Park",
//   "You like the show Euphoria"
// ]

// can also take in 'index' and 'array'
// ORDER IS IMPORTANT!  value, index, array

// pseudo for .map()
//  it iterates over the array
//  on each iteration - it does something to the specific element (individual element)
// it pushes it to a new array in the order of the orig arry
// this new array is assigned to the variable that you define in the statement
//  returns new array

// index is the current index in the iteration process think i in for loops

// const result = showArray.map((value, index) => {
//   return `You like the show ${value}. it is at index ${index} in the array.`
// })
// console.log(result)

//   ("You like the show Changeling. it is at index 0 in the array.",
//   "You like the show Bob's Burgers. it is at index 1 in the array.",
//   "You like the show Handmaid's Tale. it is at index 2 in the array.",
//   "You like the show South Park. it is at index 3 in the array.",
//   "You like the show Euphoria. it is at index 4 in the array.")
// ]

// const result = showArray.map((value, index, array) => {
//   return `You like the show ${value}. it is at index ${index} in the array that contains: ${array}.`
// })
// console.log(result)

// const multiplyBy3 = numsArray.map((value) => {
//   return value * 3
// })
// console.log(multiplyBy3.join("")) //[ 24, 45, 15, 108, 126 ]

// console.log(numsArray) //[ 8, 15, 5, 36, 42 ]

// ONE-LINER
// const multiplyBy3 = numsArray.map((value) => value * 3)
// console.log(multiply)

//  Using in a function - dynamic
const numsArray = [8, 15, 5, 36, 42]

const evenOrOdd = (arrayOfNums) => {
  return arrayOfNums.map((value) => {
    if (value % 2 === 0) {
      return "even"
    } else if (value % 2 !== 0) {
      return "odd"
    } else {
      return "oops, something went wrong"
    }
  })
}
console.log(evenOrOdd(numsArray))

let myNewArray = evenOrOdd(numsArray)
console.log(myNewArray)

// FILTER
//  built in if else
// tell it condition to be met, and it will return a subset of original array with the values that meet that condition
const showArray = [
  "Changeling",
  "Bob's Burgers",
  "Handmaid's Tale",
  "South Park",
  "Euphoria",
]

const searchP = showArray.filter((value) => {
  return value.includes("p") || value.includes("P")
})
console.log(searchP) //[ 'South Park', 'Euphoria' ]

const searchOdds = numsArray.filter((value) => {
  return value % 2 !== 0
})

console.log(searchOdds) //[ 15, 5 ]
