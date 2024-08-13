import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (

    <>
    <nav>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><div>Home Page</div></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/registration-form"><div>Registration Form</div></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/details"><div>Details</div></NavLink>
    </nav>
    </>
  )
}

export default Navbar
