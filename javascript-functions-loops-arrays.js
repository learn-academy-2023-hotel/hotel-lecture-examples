//Javascript functions loops and arrays 10/16/23

// create a function that will mulitply each element of an array by 5 



// console.log(numsArray[3])// 11

// const times5 = (array) => {
//   return array * 5 
// }
// console.log(times5(numsArray)) // NaN


// const times5 = (array) => {
//   for (let i=0; i<array.length; i++){
//     console.log(array[i])
//   }
// }

// console.log(times5(numsArray)) // 4 38 92 11 205 undefined


// const times5 = (array) => {
//   for (let i=0; i<array.length; i++){
//     console.log(array[i] * 5)
//   }
// }

// console.log(times5(numsArray)) // 20 190 460 55 1025 undefined

// const times5 = (array) => {
//   for (let i=0; i<array.length; i++){
//     return array[i] * 5
//   }
// }

// console.log(times5(numsArray)) // 20 


// const times5 = (array) => {
//   let times5Arr = []
//   for (let i=0; i<array.length; i++){
//     array[i] * 5
//   }
//   return times5Arr
// }

// console.log(times5(numsArray)) // []




// const numsArray = [4, 38, 92, 11, 205]
// // create a function that takes in an array as a parameter
// const times5 = (array) => {
//   //create a variable assigned to [] to store data
//   let times5Arr = []
//   // use for loop to access each element in array
//   for (let i=0; i<array.length; i++){
//   // on each iteration mulitply the current value by 5 and then add value to the end of new array
//     times5Arr.push(array[i] * 5)
//   }
//   // once loop is complete return the new array with all the pushed in elements
//   return times5Arr
// }

// console.log(times5(numsArray)) // [ 20, 190, 460, 55, 1025 ]



// create a function that takes an array, accesses each element using iteration, modifying the element by adding it to a string and return the modified elements in a new array. 

//Pseudo code: 
// input: array - ["old fashion", "beer", "long island"]
// output: new array w/ modified elements - ["I would like a old fashion", "I would like a beer", "I would like a long island"]
//✅ create function that takes array as a parameter
//✅create variable holding new array []
//✅use a for loop to access each element
//✅use string interpolation to add current value of iteration to a string
//✅use .push to add modified elements to new array
//✅return the new array. 

const barOrder = ["old fashion", "beer", "long island","Sprite", "Irish Trashcan", "Cosmo"]

const foodOrder = ["pizza", "sandwhich", "steak", "glizzy"]

const myDrinkOrder = (array) => {
  let newOrderArr = []
  for (let i=0; i < array.length; i++){
   newOrderArr.push(`I would like a ${array[i]}`)
  }
  return newOrderArr
}

// console.log(myDrinkOrder(barOrder))
// [
//   'I would like a old fashion',
//   'I would like a beer',
//   'I would like a long island',
//   'I would like a Sprite',
//   'I would like a Irish Trashcan',
//   'I would like a Cosmo'
// ]

console.log(myDrinkOrder(foodOrder)) 
// [
//   'I would like a pizza',
//   'I would like a sandwhich',
//   'I would like a steak',
//   'I would like a glizzy'
// ]