import React, { useState } from "react"

import ShowData from "./components/ShowData"

import "./App.css"

const App = () => {
  const [showList, setShowList] = useState([
    { title: "Game of Thrones", liked: false },
    { title: "Shawshank Redemption", liked: false },
    { title: "NCIS", liked: false },
    { title: "The Wire", liked: false },
    { title: "Parks & Rec", liked: false },
    { title: "Supernatural", liked: false },
    { title: "Bob's Burgers", liked: false },
    { title: "Archer", liked: false },
  ])

  const likeShow = (selectedShow) => {
    // change the value of liked to true on click
    // passing an argument into the fxn
    console.log(showList[selectedShow]) // this gives us the clicked showObj
    // reassign the value of the liked k-v pair to true when clicked
    showList[selectedShow].liked = true
    setShowList([...showList])
  }

  return (
    <>
      <h1>Netflix Clone Hotel</h1>
      {showList.map((show, index) => {
        return (
          <ShowData
            showObj={show}
            key={index}
            likeShow={likeShow}
            index={index}
          />
        )
      })}
    </>
  )
}

export default App
