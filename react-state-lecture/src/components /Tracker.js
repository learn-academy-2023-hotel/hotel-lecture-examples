import React, {useState} from "react"


const Tracker = () => {
//     stateVariable, setterFuction = useState(argument- initial state value)
const [gallons, setGallons] = useState(0)

const addGallon = () => {
  setGallons(gallons + 1)
}

  return(
    <>
      <p> Gallons: {gallons} </p>
      <button onClick = {addGallon} style = {{backgroundColor: "seagreen", color:"rebeccapurple"}}>Add a Gallon</button>
    </>
  )
}

export default Tracker