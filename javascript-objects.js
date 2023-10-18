// <!-- css -->
// h1 {
//   background-color: blue
// }

// Objects: key-value pairs.
{
  key: "value"
}

// Key - Symbol, primative data type in JS
// value - any data type
//  Basic Structure

const myObject = {
  key: "value0",
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
}
// console.log(myObject)

// Dot Notation

// to access a value - we reference its key

// console.log(myObject.key2) //value2

const person = {
  firstName: "Walter",
  lastName: "White",
  city: "Albuquerque",
  occupation: "Chemistry Teacher",
  contact: {
    phone: "404 - 555 - 1234",
    email: "heisenberg@example.com",
    venmo: "@BlueSky-3",
  },
}

// get the first name:
// console.log(person.firstName) //Walter
// console.log(person.occupation) // Chemistry Teacher

// console.log(person.email) // undefined
// console.log(person.contact.email) // heisenberg@example.com

// // For nested objects you need the entire pathway to access the value
// console.log(person.contact.venmo)
// console.log(person.contact.phone)
// console.log(person.contact.email)
// console.log(person.contact.email, person.city)  // heisenberg@example.com Albuquerque

// @BlueSky-3
// 404 - 555 - 1234
// heisenberg@example.com

// Destructuring: unpacking the pathway of an object assign to a variable, variable will be the key
// const { phone } = person.contact
// console.log(phone) // 404 - 555 - 1234

const { phone, email, venmo } = person.contact

// console.log(venmo) // @BlueSky-3
// console.log(person.contact)

// Methods
//  - is a function that belongs to an object (behavior)
//  objects can hold both data and behavior

// const numberObject = {
//   num1: 8,
//   num2: 15,
//   num3: 42,
// }
// console.log(numberObject.num3) // 42

// const numberObject = {
//   num1: 8,
//   num2: 15,
//   num3: 42,
//   addUp: function () {
//     return num1 + num2 + num3
//   },
// }

// console.log(numberObject)

// console.log(numberObject.addUp()) // ReferenceError: num1 is not defined

// this - reserved keyword - allows you to access keys within current object

const numberObject = {
  num1: 8,
  num2: 15,
  num3: 42,
  addUp: function () {
    return this.num1 + this.num2 + this.num3
  },
}

// console.log(numberObject.addUp()) // 65

// const pets = [
//   { name: "Moose", type: "dog", age: 2 },
//   { name: "Loki", type: "dog", age: 3 },
//   { name: "Nova", type: "dog", age: 1 },
//   { name: "Dan", type: "cat", age: 12 },
//   { name: "Remii", type: "cat", age: 1 },
// ]

// console.log(pets.length) // 5
// console.log(pets[2]) //{ name: 'Nova', type: 'dog', age: 1 }
// console.log(typeof pets[0].name) // string
// console.log(pets[0].name.toUpperCase()) //MOOSE
// console.log(pets[0].age + pets[1].age)

// get all the names only of pets

// const getAllTheNames = pets.map((value) => {
//   return value.name
// })
// console.log(getAllTheNames) //[ 'Moose', 'Loki', 'Nova', 'Dan', 'Remii' ]

//  setup a map statement on our ARRAY (pets) and set it to a variable
//  const getAllTheNames = pets.map(value => {
//    // now we are dealing objects(each pet)
//   //  access the key we are looking for by using dot.notation
//     return value.name
//   })

const pets = [
  { name: "Moose", type: "dog", age: 2 },
  { name: "Loki", type: "dog", age: 3 },
  { name: "Nova", type: "dog", age: 1 },
  { name: "Dan", type: "cat", age: 12 },
  { name: "Remii", type: "cat", age: 1 },
]

// get all the pet names in all caps in dynamic function

// const allPetNames = (array) => {
//   return array.map((object) => {
//     console.log(object.toUpperCase())
//   })
// }

// console.log(allPetNames(pets)) // TypeError: object.toUpperCase is not a function  can't call a string method on an object

const allPetNames = (array) => {
  return array.map((object) => {
    return object.name.toUpperCase()
  })
}
console.log(allPetNames(pets)) //[ 'MOOSE', 'LOKI', 'NOVA', 'DAN', 'REMII' ]
