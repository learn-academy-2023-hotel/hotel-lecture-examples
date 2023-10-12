// JAVASCRIPT LOOPS 10/12/23

//scope refers to where a variable can be accessed/seen 

  // var - can be redeclared, and reassigned, 
  // var has global scope meaning tha it can be accessed in or outside of a block {}

  // if(true){
  //   var myDog = "Mazikeen"
  // }
  //  console.log(myDog) // Mazikeen

  //  if(true){
  //   var myDog = "Mazikeen"
  //   console.log(myDog) // Mazikeen
  // }
   

  // let - cannot be redeclared, but can be reassigned
  // let has local scope / block scope meaning it can only be accessed inside the block that it is declared in

  // if(true){
  //   let myDog = "Mazikeen"
  //   console.log(myDog) 
  // }
  // output: Mazikeen

  if(true){
    let myDog = "Mazikeen"
  }
  // console.log(myDog) --> output : myDog is not defined
  

// const cannot be redeclared or reassigned
// const also has that block scope.

 //Loops
  // essence of loops lies in iteration 
  // iteration - performing an action over and over again until a conditon is met
  // have a fantastic counting ablility 

//Loop antomy
   // for loops need:
    //  where to start ( initialization)
    // where to end (condition)
    // how to get from start to end (incrementation)
    // for(initialization; conditon; incrementation)


// for( let index = 0; index < 8; index = index + 1){

// }

// for(let i = 0; i < 8; i++){
//   console.log(i)
// }  
// output: 0 1 2 3 4 5 6 7

// for(let i = 0; i < 8; i+=2){
//   console.log(i)
// } 
// output: 0 2 4 6

// For Loop and Arrays

const numsArray = [6, 7, 8, 9, 10]

// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])

// for( let i = 0; i < numsArray.length; i++){
//   console.log("index: ", i )
// }
// output
// index:  0
// index:  1
// index:  2
// index:  3
// index:  4

// for( let i = 0; i < numsArray.length; i++){
//   console.log("index: ", i, "value", numsArray[i])
// }
// output
// index:  0 value 6
// index:  1 value 7
// index:  2 value 8
// index:  3 value 9
// index:  4 value 10
// const randonNums = [93, 56, 74, 11, 9, 46]
// for(let i=0; i < randonNums.length; i++){
//   if(randonNums[i] % 2 !== 0){
//     console.log(randonNums[i])
//   }
// }

// output: 93 11 9

const dString = "A drove of determined devs dive into the daring depths of Javascript"

let count = 0 
for(let i=0; i < dString.length; i++){
  if(dString[i] === "a" || dString[i] === "A" ){ 
    count ++
  }
}
console.log(count) // 7 


