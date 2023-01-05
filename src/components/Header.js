import React from "react";
import { NavLink } from "react-router-dom";


const NavLinkClass = ({ isActive }) => isActive ? 'is-active' : undefined


const Header = () =>(
    <div>
    <h1>Expensify</h1>
    
            <NavLink to="/" className={NavLinkClass}>home</NavLink>
            <NavLink to="/create" className={NavLinkClass}>create</NavLink>
          <NavLink to="/help" className={NavLinkClass}>Help</NavLink>
        
        

    </div>
)

export default Header