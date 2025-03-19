import React from 'react'
import WithHOC from './WithHOC'

const CounterTwo = (props) => {
  console.log(props)
  return (
    <div>
      <h2>CounterOne</h2>
      <h3>Count: {props.count}</h3>
      <button onClick={() => props.increment(2)}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  )
}

export default WithHOC(CounterTwo)