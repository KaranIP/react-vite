import React from 'react'
import { NavLink } from 'react-router-dom'
import "./global.css"


const NavBar = () => {
  return (
    <>
    <nav>
        <aside>
            <img margin="250px" src="src/photos/website-design-icon-png-9.jpg" alt="logo" height="100px" width="100px" />
        </aside>
        <aside>
            <ul>
                <NavLink to="/">
                <li>Home</li>
                </NavLink>
                <NavLink to="/viewall">
                <li>View All</li>
                </NavLink>
            </ul>
        </aside>
    </nav>
    </>
  )
}

export default NavBar