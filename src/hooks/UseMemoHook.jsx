import React, { useMemo } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = React.useState(0)

    let completeFunction = useMemo(() => {
      for(let i = 0; i < 1000; i++) {
        console.log(i)
      }
      // return (value) => console.log(value)
  }, [])

  return (
    <div className='offset-md-4'>
        <h1>{count}</h1>
        <button className='btn btn-outline-primary' onClick={() => setCount((count) => count + 1)}>InCrement</button>
        {completeFunction}
    </div>
  )
}

export default UseMemoHook