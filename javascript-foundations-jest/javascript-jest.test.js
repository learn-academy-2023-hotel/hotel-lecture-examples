// JavaScript Testing with Jest


// Jest - a testing framework
  // a framework is a collection of file managed by something called Yarn

//Yarn - A package manager for JavaScript that contains code being shared from other developers

// $ yarn add jest - will add jest to your folder
  //will give you - node_modules, package.json, and yarn.lock

// Test Driven Development - TDD 
  // write a test first and write the code that will make the test pass
  // helps break down problem into smaller problems 
  


  // RED - GREEN - REFACTOR 

    //RED
    // write the test 
    // run your testing suite to see a failing test (good failure)

    //GREEN
    //write the code that will make the test pass
    // run the testing suite to see if the make passes the test ($ yarn jest)

    //REFACTOR if necessary 


// Anatomy of the test 

// describe("functionName", () => {
//   it("description of what this function is supposed to do", () => {
//     expect(functionName()).toEqual("expected outcome")
//   })
// })


// Create a function called greeter that returns a string that says "Wassup, Hotel!"

  //RED
  // input: none
  // output: "Wassup, Hotel!"

  //a describe method that lists the name of the function
  describe("greeter", () => {
    // The "it" metod is nested in the describe block and give a description of what the function should do (life hack: you could get this from the coding prompt)
    it("returns a string that says Wassup, Hotel!", () => {
      // The expect will invoke the function and compare the result to the predetermined output that is in the .toEqual()
      expect(greeter()).toEqual("Wassup, Hotel!")
    })
  })

  // output:  ReferenceError: greeter is not defined --> GOOD FAILURE 


  //GREEN
  const greeter = () => {
    return "Wassup, Hotel!"
  }

  // output: PASS 


  // Create a function called doYouUnderstand that will log "help others" if you do understand or "ask questions" if you do not

  // input: "yes"
  //output: "help others"

  //input: "no"
  //output: "ask questions"

  describe("doYouUnderstand", () => {
    it("will log help others if you do understand or ask questions if you do not", () => {
      expect(doYouUnderstand("yes")).toEqual("help others")
      expect(doYouUnderstand("no")).toEqual("ask questions")
    })
  })

  //output: ReferenceError: doYouUnderstand is not defined 

  //Psuedocode
  // create a function that takes in a string
  // write a conditional to evaluate if the sting is "yes"
    // return "help other"
  // if it evaluates to "no"
    // return "ask question"

  const doYouUnderstand = (string) => {
    if(string === "yes"){
      return "help others"
    } else if(string === "no"){
      return "ask questions"
    }else{
      return "oops something went wrong "
    }
  }