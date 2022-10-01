import './Navbar.css';
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from 'react';


export default function Navbar() {
    const [Show, setShow] = useState(0)
    function navFxn(){
        if (Show === 0) {
            setShow(-100);
        } else {
            setShow(0);
        }
    }

    function handleResize() {
        if (window.innerWidth < 690) {
            setShow(-100);
        }
        else{
            setShow(0);
        }
    }

    window.addEventListener('resize', handleResize)

    return (
        <>
            <div className="sideBar" id="side" style={{left: `${Show}%`}}>
                <div className="logo">
                    <a href="/"><span>P</span>ortfolio</a>
                </div>
                <div className="nav">
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/about' activeClassName="active">About</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/projects' activeClassName="active">Projects</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/contact' activeClassName="active">Contact</NavLink></li>
                </div>
            </div>
            <div className="nav-toggler" id="toggleBtn1" onClick={navFxn}>
                <span></span>
            </div>
        </>
    )
}