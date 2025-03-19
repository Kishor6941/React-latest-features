import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const CustomHookNav = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#282A35',}}>
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink className='nav-link' to='todo-api'>
                          Todo
                        </NavLink>
                      </li>
        
                      <li className="nav-item">
                        <NavLink className='nav-link' to="user">
                         User
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


export default CustomHookNav