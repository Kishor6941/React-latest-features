import { createContext, useState } from "react"

export let counterContext = createContext()

// counterCOntext provider
// cononter comsumer

const UseContextHook = ({children}) => {

  function getId(id) {
    console.log(id)
  }
  const [count, setCount] = useState(0)
  return (
    <counterContext.Provider value={{ count, setCount,getId }}>
        {children}
    </counterContext.Provider>
  )
  
}

export default UseContextHook