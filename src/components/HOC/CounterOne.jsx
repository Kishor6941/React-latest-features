import React from 'react'
import WithHOC from './WithHOC'

const CounterOne = (props) => {
  console.log(props)
  
  return (
    <div>
      <h2>CounterOne</h2>
      <h3>Count: {props.count}</h3>
      <button onClick={() => props.increment(1)}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  )
}

export default WithHOC(CounterOne)