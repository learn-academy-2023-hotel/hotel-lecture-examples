// JAVASCRIPT FUNCTIONS 10/16

// - specific task
// - takes an input, does something, returns output
// - REUSABLE / DYNAMIC

// Arrow Syntax - ES6

// Anatomy

// 1. Variable declaration
//  const
//  followed by function name - camelCase

// 2. Arrow Syntax (function expression)

// () - funnel we can pass data into our function, pass the input
//  => the replacement for keyword function
//  {}  - where we write our code - our process - it does something
// 3. return
//  every fxn must output something.  return defines the output

// Altogether

// const functionName = (input) => {
//   // code that does something here
//   return output
// }

// const myFunction = () => {
//   return "my output"
// }
// myFunction()  // no output in terminal because didn't tell it to print to terminal
// console.log(myFunction()) // my output

// const makeCoffee = () => {
//   return "Coffee is made!"
// }

// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())

// can take inputs; can be multiple inputs
// encapsulated - only outside influence should be designated inputs
// allows for predictable behavior

// parameters - inputs in the function definition
// argument - actual value passed in when called

// const myFunction = (parameter) => {
//   return `This is what was passed in: ${parameter}`
// }
// myFunction(argument)

// console.log(myFunction("papaya")) //This is what was passed in: papaya
// console.log(myFunction("pineapple")) //
// This is what was passed in: pineapple

// Pneumonic:
// P - parameter  --> placeholder in function definition
// A - argument --> actual value passed in when call the function

const myFunction = (fruitName) => {
  // any logic here
  return `This is what was passed in: ${fruitName}`
}

const addNumbers = (num1, num2) => {
  return num1 + num2
}

// console.log(addNumbers(4, 5))
// console.log(addNumbers(15, 35))
// console.log(addNumbers(8, -400))
// console.log(addNumbers(67, 49))

// const makeCoffee = (coffeeType) => {
//   return `Your ${coffeeType} is made!`
// }

// console.log(makeCoffee("Americano")) // Your Americano is made!

// console.log(makeCoffee()) //  Your undefined is made!

// Pseudocode:
//  function takes in parameter coffeeType and size - strings - returns price

// input: coffeeType(string) and size(string) - parameters
// output: price(string)
//  prices: small - $3, medium - $4, large - $5

//  use conditional statement to evaluate the size
//  if it's small it's $3
//  it it's med it's $4
//  if it's lg it's $5
//  if it's none of above, return a message
// return the correct price

const makeCoffee = (coffeeType, size) => {
  if (size === "large") {
    return `Your ${size} ${coffeeType} is $5.`
  } else if (size === "medium") {
    return `Your ${size} ${coffeeType} is $4.`
  } else if (size === "small") {
    return `Your ${size} ${coffeeType} is $3.`
  } else {
    return "No coffee for you!"
  }
}

console.log(makeCoffee("Latte", "medium"))
console.log(makeCoffee("medium", "chai"))
console.log(makeCoffee(5, 10))
