// JAVASCRIPT CLASSES 10/19/2023

// classes are recipes for making objects, blueprints
// data and action

// declaring classes
//  - keyword class - declares the class
//  - class name uses PascalCase - first letter capitalized and all subsequent words capitalized

// recipeBook  - variable
// RecipeBook - class

// syntax  class + NameOfClass + curly brackets
// constructor method -> builds object

// class Car {
//   constructor() {
//     this.make = "Subaru"
//     this.model = "CrossTrek"
//     this.year = 2016
//     this.color = "Blue"
//   }
// }
// // create new object using the new keyword
// let myCar = new Car()
// console.log(myCar) //Car { make: 'Subaru', model: 'CrossTrek', year: 2016, color: 'Blue' }
// let someCar = new Car()
// console.log(someCar)
// Car { make: 'Subaru', model: 'CrossTrek', year: 2016, color: 'Blue' }
// Car { make: 'Subaru', model: 'CrossTrek', year: 2016, color: 'Blue' }

// class Car {
//   constructor(turtle, hippo, sloth, elephant) {
//     this.model = sloth
//     this.make = hippo
//     this.color = elephant
//     this.year = turtle
//   }
// }

// let myDreamCar = new Car("Porsche", "Boxter", 2024, "Silver")
// console.log(myDreamCar)
// // Car { make: 'Porsche', model: 'Boxter', year: 2024, color: 'Silver' }

// let otherCar = new Car("Porsche", "Boxter", 2024, "Silver")

// Car { model: 'Boxter', make: 'Porsche', color: 'Silver', year: 2024 }
// Car { model: 2024, make: 'Boxter', color: 'Silver', year: 'Porsche' }

class Car {
  constructor(modelString, makeString, colorString, yearNumber) {
    this.model = modelString
    this.make = makeString
    this.color = colorString
    this.year = yearNumber
    this.isOperational = true
  }
  carBoasting() {
    return `My ${this.make} ${this.model} is super cool!`
  }
  brokeDown() {
    this.isOperational = false
  }
  workingAgain() {
    this.isOperational = true
  }
}
// console.log(carBoasting()) //        ^

// ReferenceError: carBoasting is not defined
// // call method by using dot.notation
// console.log(car.carBoasting())
let car = new Car("GL550", "Mercedes", "Black", 2014)
console.log(car)
// Car {
//   model: 'GL550',
//   make: 'Mercedes',
//   color: 'Black',
//   year: 2014,
//   isOperational: true
// }
console.log(car.brokeDown())
// console.log(car)
// // Car {
//   model: 'GL550',
//   make: 'Mercedes',
//   color: 'Black',
//   year: 2014,
//   isOperational: false
// }
console.log(car)
car.workingAgain()
console.log(car)
