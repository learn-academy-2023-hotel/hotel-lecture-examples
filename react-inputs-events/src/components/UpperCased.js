
const UpperCased = (props) => {

  // userInput is a parameter that stands for props.name that is being passed in the function call
  const changeToUpperCase = (userInput) => {
    return userInput.toUpperCase()
  }
  return(
    <>
      <h3>HELLO, I SEE YOUR NAME IS: </h3>
      {/* Call the changeToUpperCase function and pass props.name as an argument */}
      <p>{changeToUpperCase(props.name)}</p>
      {/* <p>{props.name.toUpperCase()}</p> */}
    </>
  )
}

export default UpperCased