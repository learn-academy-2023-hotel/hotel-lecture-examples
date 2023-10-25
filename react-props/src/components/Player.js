import React from 'react'

const Player = (props) => {
  console.log(props)
  return (
    <>
      <h3>Current Episode: {props.currentEpisode}</h3>
      <button onClick={props.nextEpisode}>Next Episode</button>
      <hr />
    </>
  )
}

export default Player