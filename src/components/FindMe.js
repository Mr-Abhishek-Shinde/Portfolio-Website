import React from 'react'
import gitIcon from '../img/icons8-github-96.png';
import instaIcon from '../img/icons8-instagram-96.png';
import linkedinIcon from '../img/icons8-linkedin-circled-96.png';

const FindMe = () => {
    return (
        <div className="moreDetails3">
            <h2><span>FIND ME</span> HERE</h2>
            <div className="findMe">
                <img src={gitIcon} onClick={() => window.open("https://github.com/Mr-Abhishek-Shinde")} alt="" />
                <img src={linkedinIcon} onClick={() => window.open("https://www.linkedin.com/in/abhishek-shinde-7bb403230/")} alt="" />
                <img src={instaIcon} onClick={() => window.open("https://instagram.com/__abhi_shinde_06__?igshid=YmMyMTA2M2Y=")} alt="" />
            </div>
            <p>Made by &#169;Abhishek Shinde</p>
        </div>
    )
}

export default FindMe