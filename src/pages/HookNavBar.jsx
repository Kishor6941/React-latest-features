import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HookNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#282A35',}}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to='useState'>
                  useState
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useEffect">
                  useEffect
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useMemo">
                  useMemo,memo
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useCallback">
                  useCallback
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useRef">
                  useRef
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useReducer">
                  useReducer
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useContext">
                  useContext
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useId">
                  useId
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useDeferredValue">
                  useDefferedValue
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="useTransition">
                  useTransition
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="use">
                  use
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to="context-api">
                  ContextAPI
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HookNavBar;
