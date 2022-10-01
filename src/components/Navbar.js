import './Navbar.css';
import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div className="sideBar" id="side">
                <div className="logo">
                    <a href="/"><span>P</span>ortfolio</a>
                </div>
                <div className="nav">
                    <li id="navBtn"><NavLink exact to='/home' activeClassName='active'>Home</NavLink></li>
                    <li id="navBtn"><NavLink exact to='/about' activeClassName="active">About</NavLink></li>
                    <li id="navBtn"><NavLink exact to='/projects' activeClassName="active">Projects</NavLink></li>
                    <li id="navBtn"><NavLink exact to='/contact' activeClassName="active">Contact</NavLink></li>
                </div>
            </div>
            <div className="nav-toggler" id="toggleBtn1">
                <span></span>
            </div>
        </>
    )
}