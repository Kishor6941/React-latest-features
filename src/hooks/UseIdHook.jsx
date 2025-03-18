import React, { useContext, useId } from 'react'
import { counterContext } from './UseContextHook'

const UseIdHook = () => {

 let{count,getId} =  useContext(counterContext)
  const nameId = useId()
  const emailId = useId()

  return (
    <div className="col-md-6 offset-md-3 mt-3">
      <h1>{count}</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id={nameId} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className='form-control' id={emailId}/>
      </div>

      <button onClick={() => getId(100)}>setId</button>
    </div>
  )
}

export default UseIdHook