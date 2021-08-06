import React, { useState, useEffect } from 'react'
import './App.css';

// function SecretComponent( ) {
//   return <h1>Secret information authorized users only</h1>
// }
// function RegularComponent( ) {
//   return <h1>Everyone can see this</h1>
// }


function App() {
  
  const [emotion, setEmotion] = useState("happy")
  const [secondary, setSecondary] = useState("tired")
  
    useEffect(() => {
      console.log(`It's ${emotion} around here! `)
    },[] )
  
    useEffect(() => {
      console.log(`It's ${secondary} around here! `)
    },[] )

  return(
    <>
    <h1>Current emotion is {emotion} and {secondary} </h1>
    <button onClick={() => {
      setEmotion("frustrated")
    } } >Frustrated</button>

    <button onClick={() => {
      setEmotion("Enthusiastic")
    } } >Enthusiastic</button>


    <button onClick={() => {
      setSecondary("frustrated")
    } } >make Crabby</button>

    <button onClick={() => {
      setSecondary("Enthusiastic")
    } } >make happy</button>


    {/* {authorized? <SecretComponent />: <RegularComponent />} */}
    </>
  )
}

export default App;
