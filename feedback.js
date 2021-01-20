import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return(
    <div>
      <h1>JAVASCRIPT</h1>
      <button onClick={() => setGood(1)}>good</button>
      <button onClick={() => setNeutral(1)}>neutral</button>
      <button onClick={() => setBad(1)}>bad</button>
      <h3>GOOD {good}</h3>
      <h3>NEUTRAL {neutral}</h3>
      <h3>BAD {bad}</h3>
    </div>
  )
  
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
