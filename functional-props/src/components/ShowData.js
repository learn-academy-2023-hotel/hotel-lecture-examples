import React from "react"

const ShowData = (props) => {
  // console.log(props)
  // const { showObj, likeShow, index } = props

  const handleClick = () => {
    props.likeShow(props.index)
  }

  return (
    <>
      <h3>{props.showObj.title}</h3>
      {/* conditional rendering using logical AND */}
      {/* only show heart when liked = true */}
      {props.showObj.liked && <h4>💙</h4>}
      <button onClick={handleClick}>Like!</button>
    </>
  )
}

export default ShowData
