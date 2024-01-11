import { useState } from "react"
import mockData from "./mockData"

import "./App.css"

const App = () => {
  const [nasaData, setNasaData] = useState("")

  // const getRandomPic = () => {
  //   let data = mockData.photos
  //   let randomNum = Math.floor(Math.random() * data.length)
  //   setNasaData(data[randomNum].img_src)
  // }

  const apiKey = process.env.REACT_APP_API_KEY
  console.log(apiKey)

  const nasaFetch = () => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((payload) => {
        setNasaData(payload)
      })
      .catch((err) => console.log("errors: ", err))
  }

  return (
    <>
      <h1>Hotel's External API</h1>
      <button onClick={nasaFetch}>Click here!</button>

      {nasaData &&
        nasaData.photos.map((photo, index) => {
          return <img src={photo.img_src} alt="Nasa pic" key={index} />
        })}
    </>
  )
}

export default App
