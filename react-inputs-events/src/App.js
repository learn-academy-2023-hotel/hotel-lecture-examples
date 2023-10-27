import { useState } from "react"
import UpperCased from "./components/UpperCased"

const App = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    // console.log(e) // is an object of the entire listener
    // console.log(e.target) // using dot notation, we can access the input tag
    // console.log(e.target.value) // gives us the value inside the input tag
    setName(e.target.value) // Setting our state variable to the value of what is in the input field
  }

  console.log(name) // Logging our state variable to ensure the data from the input field is being stored in state
  return(
    <>
      <h1>Greeter App</h1>
      <input 
        type="text" 
        onChange={handleChange} // onChange calls the handleChange function and passes the event object to the function
        value={name}
      />
      <UpperCased name={name}/>
    </>
  )
}

export default App