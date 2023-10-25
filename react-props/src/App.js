import React, { useState } from 'react'
import Episode from './components/Episode'
import "./App.css"
import Player from './components/Player'

const App = () => {

  const episodes = ["Building Projects to Learn", "Headless Commerce with Open Source", "The Risks of Micro-Frontend", "A Friendly Guide to Software Development", "Developer to Engineering Leader", "Write Boring Code"]

  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  
  const nextEpisode = () => {
    let nextIndex = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextIndex])
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
      <Player currentEpisode={currentEpisode} nextEpisode={nextEpisode} />


      <div className="cards">

        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}

        {/* <Episode title={episodes[0]} />
        <Episode title={episodes[1]} />
        <Episode title={episodes[2]} />
        <Episode title={episodes[3]} />
        <Episode title={episodes[4]} /> */}
      </div>
    </>
  )
}

export default App