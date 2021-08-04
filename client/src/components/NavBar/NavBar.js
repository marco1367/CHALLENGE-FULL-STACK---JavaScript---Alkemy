import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import logo from "./d_logo_small.png";




function NavBar() {
    return (
        <div id="navbar_container" >

            <div id="logo_navbar_container" >
                <NavLink to="/" id="logo_navbar" >
                    <img src={logo} id="logo_navbar" />
                </NavLink>
                <h2> Alkemy challenge FullStack - Demaio, Marco Pablo </h2>
            </div>

            <div id="bttn_navbar_container" > 
                <NavLink to="/newoperation" className="link_navbar" activeClassName="active_link_navbar" >
                    Add operation 
                </NavLink>
            </div>

        </div>
    );
  }
  
  export default NavBar;