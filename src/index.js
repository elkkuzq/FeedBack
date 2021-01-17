import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistiscs = (props) => {
  if (props.all === 0)
  {
    return(
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }

  return(
    <div>
      <h1>statics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.all}</p>
        <p>average {props.all / 3}</p>
        <p>positive {props.good / props.all*100}%</p>
        <p>{props.text}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [text, setText] = useState([])
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const Good = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const Neutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  
  const Bad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  const anecdote = () => {
    setText(anecdotes)
  }

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
          <Button onClick={Good} text='good' />
          <Button onClick={Neutral} text='neutral' />
          <Button onClick={Bad} text='bad' />
          <Statistiscs good = {good} neutral = {neutral} bad = {bad} all = {all} text = {text} />
          <Button onClick={anecdote} text='anecdotes' />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
