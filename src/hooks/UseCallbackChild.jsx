import React, { memo } from 'react'

const UseCallbackChild = ({completeFunction}) => {
  console.log("UseCallbackChild rendered")
  return (
    <div>
      <button className='btn btn-outline-info' onClick={() => completeFunction()}>onClick</button>
    </div>
  )
}

export default memo(UseCallbackChild)