import React from "react";
import { Link , NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
      
       
       <nav>
           
            <div><h1 className="title">Website</h1></div> 
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li >
                    <NavLink to="/HomeC"> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li >
                    <NavLink to="/Services">Services</NavLink>
                </li>
                <li >
                    <NavLink to="/Contact">Contact</NavLink>
                </li>

            </ul>
        </nav>

    );
}