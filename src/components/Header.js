import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";  
import { startLogout } from "../actions/auth";

const NavLinkClass = ({ isActive }) => isActive ? 'is-active' : undefined


export const Header = ({ startLogout }) =>(
    <div>
    <h1>Expensify</h1>
            <NavLink to="/dashboard" className={NavLinkClass}>Dashboard</NavLink>
            <NavLink to="/create" className={NavLinkClass}>create</NavLink>
          <button onClick={startLogout}>Logout</button>
        

    </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout:()=>  dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)