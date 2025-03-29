import React, { use,Suspense } from 'react'

const fetchTodos = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/todos')
return res.json()
 
}
const UseHook = () => {
    // const data = use(fetchTodos())
    
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div>useHook</div>
    </Suspense>
  )
}

export default UseHook