import React from 'react'
import { NavLink } from 'react-router-dom'; 

import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/request'>Request profile</NavLink>  
        </li>  
      </ul>  
    </nav>
  )
}

export default NavBar