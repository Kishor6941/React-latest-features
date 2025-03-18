import React from 'react'

const ProtectedRoutes = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  return isAuthenticated ? (
    <div>
      <h1>Protected Routes</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)} className='btn btn-danger'>LogOut</button>
      <div className='mt-5'>
      {children}
      </div>
    </div>
  ) : (
    <div>
      <h1>UnAuthorized</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)} className='btn btn-success'>Login</button>
    </div>
  )
}

export default ProtectedRoutes