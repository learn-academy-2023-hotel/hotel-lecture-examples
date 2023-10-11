// JAVASCRIPT CONDITIIONALS LECTURE 10/11/23

// Javascript Conditional
// AKA decision trees, if/else statments, or conditional statements
// give your application the power to perform logic
  // Logic via evaluations resulting in a boolean to trigger response
  // evaluations rely on comparisons. 


  // Equality Operators - Asks, are these things the same
    // == loose equality - 
    // === strict equality 

    // console.log(21 == "21")
    // output: true 
    // loose equality looks only at the value and uses type coercion

    // console.log(21 === "21")
    //output: false 
    // strict equality looks at both the value and its data type. 

// Relations Operators - Asks, how do these values relate to eachother arimethically 
  // > - greater than 
  // < - less than 
  // >= great than or equal to 
  // <= less than or equal to 

  // console.log(4 > 679) // false
  // console.log(1738 < 100) // false
  // console.log(25 <= 28) // true 
  // console.log(65 >= 78) // false 

// Logical Operators
  // && - logical AND
  // || - logical OR
  // ! - BANG operator aka Logical Opposite 

  let faveNum = 30 
 faveNum = 2
  // console.log(faveNum === 30 && faveNum > 8) // true 
  // console.log(faveNum === 30 && faveNum > 23) // true 
  // console.log(faveNum === 30 && faveNum > 45) // false because with && both evaluations must be true inorder for the whole evlauation to be true


  // console.log(faveNum === 30 || faveNum > 8) // true 
  // console.log(faveNum === 30 || faveNum > 23) // true 
  // console.log(faveNum === 30 || faveNum > 45) // true 
  // With the logical OR one evaluation has to be true in order for the whole elvauation to be true. 

  // console.log(faveNum === 2) //true 
  // console.log(!faveNum === 2) // false 


  // console.log(faveNum === 27) // false
  // console.log(faveNum !== 27) // true


// Conditonals 
  // made up of if, else statements 

  // IF start the conditional, passes an evaluation which is wrapped in () and a resonpse in {}

  let orderTotal = 75

  // if(orderTotal === 75){
  //   console.log( orderTotal - 5)
  // }
  // output - 70

  // Else is triggered is all other evaluations evaluate to false. Does not need an evaluation passed only a response 
orderTotal = 72

  // if(orderTotal === 75){
  //   console.log( orderTotal - 5)
  // } else {
  //   console.log("Dang you're broke")
  // }
  // output: Dang you're broke

  // Else if is used when there more than 2 possible outcomes. Youcan have as many else ifs as you need. Need to pass and evaluation in () and a repsonse {}

orderTotal = 175

  // if(orderTotal === 75){
  //   console.log( orderTotal - 5)
  // } else if (orderTotal >= 100){
  //   console.log(orderTotal / 2)
  // }
  // else {
  //   console.log("Dang you're broke")
  // }
  // output: 87.5

  if(orderTotal === 75){
    console.log(`Thanks to our SweaterWeather75 deal your new total is ${orderTotal - 5}`)
  } else if (orderTotal >= 100){
    console.log(`Thanks to our SpookySavings deal your new total is ${orderTotal}`)
  }
  else {
    console.log("Dang you're broke")
  }

  // output: Thanks to our SpookySavings deal your new total is 87.5