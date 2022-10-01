import './Navbar.css';
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import homeImg from './img/icons8-home-24.png';
import infoImg from './img/icons8-info-squared-24.png';
import projectsImg from './img/icons8-learning-24.png';
import contactImg from './img/icons8-contact-24.png';


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
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/' activeClassName='active'><img src={homeImg}
                                alt=""/> Home</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/about' activeClassName="active"><img src={infoImg}
                                alt=""/> About</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/projects' activeClassName="active"><img src={projectsImg}
                                alt=""/> Projects</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink exact to='/contact' activeClassName="active"><img src={contactImg}
                                alt=""/> Contact</NavLink></li>
                </div>
            </div>
            <div className="nav-toggler" id="toggleBtn1" onClick={navFxn}>
                <span></span>
            </div>
        </>
    )
}