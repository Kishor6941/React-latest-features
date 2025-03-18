import React, { useCallback } from 'react'
import UseCallbackChild from './UseCallbackChild'

const UseCallbackHook = () => {
  const [count, setCount] = React.useState(0)

  // function completeFunction() {
  //   for(let i = 0; i < 1000; i++) {
  //     console.log(i)
  //   }
  // }

  let completeFunction = useCallback(() => {
    for(let i = 0; i < 1000; i++) {
      console.log(i)
    }
  },[])

  return (
    <div className='offset-md-4'>
      <h1>{count}</h1>
        <button className='btn btn-outline-success' onClick={() => setCount(count + 1)}>Increment Counter</button>
        <UseCallbackChild completeFunction={completeFunction} />
    </div>
  )
}

export default UseCallbackHook