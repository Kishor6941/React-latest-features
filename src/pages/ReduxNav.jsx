import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const ReduxNav = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#282A35',}}>
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link  className='nav-link' to=''>
                          Redux Toolkit
                        </Link>
                        {/* <NavLink className='nav-link' to='product'> */}
                        {/* </NavLink> */}
                      </li>
        
                      <li className="nav-item">
                        <NavLink className='nav-link' to="todo">
                          Todo
                        </NavLink>
                      </li>
        
                    </ul>
                  </div>
                </div>
              </nav>
              <Outlet />
    </div>
  )
}

export default ReduxNav