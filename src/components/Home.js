import './Home.css';
import React from "react";
// import userImg from './img/dummyImg.png';
import userImg from './img/profileImg.jpg';
import userImg2 from './img/hello_man.png';
import gitIcon from './img/icons8-github-96.png';
import instaIcon from './img/icons8-instagram-96.png';
import linkedinIcon from './img/icons8-linkedin-circled-96.png';

import { motion } from "framer-motion";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const pageVariants = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    }
};

const pageTrans = {
    transition: "linear",
    duration: 0.2
}

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);


    return (
        <motion.div id="home" initial="out" animate="in" exit="out" transition={pageTrans} variants={pageVariants}>

            <section className="homeSection section" id="sect">
                <div className="homeContainer">
                    <div className="someInfo">
                        <div className="myInfo">
                            <h2 data-aos="fade-down">Hello!<span className="wave">👋</span> I'm</h2>
                            {/* <h1 className="myName" data-aos="slide-right">Abhishek Shinde</h1> */}
                            <h1 class="myName glitch">
                                <span aria-hidden="true">ABHISHEK SHINDE</span>
                                ABHISHEK SHINDE
                                <span aria-hidden="true">ABHISHEK SHINDE</span>
                            </h1>
                            <h2 className="shortInfo" data-aos="fade">A Creative Web Developer from <span>COEP</span></h2>
                            <p>I am SY student at COEP currently pursuing B.Tech in Computer Science and I am a Creative
                                Web Developer...</p>
                        </div>
                        <div className="myPhoto" data-aos="zoom-in">
                            <img src={userImg} alt="" />
                        </div>
                    </div>
                    <div className="moreInfo">
                        <h2>Let me <span>Introduce</span> myself</h2>
                        <div className="moreDetails">
                            <img src={userImg2} alt="" />
                            <div className="moreDetails2">
                                <p>I like <span>Programming</span> and <span>Web Development...</span></p>
                                <p>I know <span>Python, C, Javascript</span> and <span>ReactJs.</span></p>
                                <p>My field of interests are working on <span>Web Development Projects</span> and
                                    also
                                    exploring areas of <span>Data Science and Machine Learning.</span></p>
                                <p>I like to listen songs in my free time.</p>
                            </div>
                        </div>
                        <div className="moreDetails3">
                            <h2><span>FIND ME</span> HERE</h2>
                            <div className="findMe">
                                <img src={gitIcon} onClick={() => window.open("https://github.com/Mr-Abhishek-Shinde")} alt="" />
                                <img src={linkedinIcon} onClick={() => window.open("https://www.linkedin.com/in/abhishek-shinde-7bb403230/")} alt="" />
                                <img src={instaIcon} onClick={() => window.open("https://instagram.com/__abhi_shinde_06__?igshid=YmMyMTA2M2Y=")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    )
}