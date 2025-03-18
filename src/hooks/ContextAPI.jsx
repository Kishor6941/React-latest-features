import React, { useContext } from 'react'
import { counterContext } from './UseContextHook'

const ContextAPI = () => {
   let{count, setCount} = useContext(counterContext)
  return (
    <div>
        <h1>ContextAPI</h1>
        <h1>{count}</h1>
        <button
            onClick={() => setCount((count) => count + 1)}
            className="btn btn-primary"
        >
            Increment
        </button>
    </div>
  )
}

export default ContextAPI