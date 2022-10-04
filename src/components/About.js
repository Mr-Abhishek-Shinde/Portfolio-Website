import './About.css';
import React from "react";

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

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <motion.div id="resume" initial="out" animate="in" exit="out" transition={pageTrans} variants={pageVariants}>
            <section class="resumeSection section" id="sect">
                <div class="resumeContainer">
                    <h1 className="secTitl" data-aos="flip-right">Know More About Me</h1>
                    <div class="addInfo">
                        <h1>About Me -</h1>
                        <div class="abtMe1">
                            <h6>I am a focused and enthusiastic developer with a keen interest in Software development, Data Science and Machine Learning. I am looking forward to explore this field and apply my knowledge to solve real-world industry problems.</h6>
                            <h6>I'm an Explorer, Devoted, Empathetic, Consistent Person.</h6>
                        </div>

                        <p>Birth-date: <span>6 August 2003</span></p>
                        <p>City: <span>Wai, Satara.</span></p>
                        <p>Email: <span>abhishinde889@gmail.com</span></p>
                    </div>
                    <div class="hobby">
                        <h1>My Hobbies -</h1>
                        <h6>My hobbies include Travelling, Gaming, Coding, Listening Music and Star Gazing.</h6>
                        <h6>I also enjoy watching Horror and Thriller movies.</h6>
                        <h6>I also have interest in Quantum Physics. </h6>
                    </div>

                    <div class="skills">
                        <h1>Skills -</h1>
                        <div class="skills1">
                            <li>Problem Solving</li>
                            <li>Persistance</li>
                            <li>Team Work</li>
                            <li>Project Management</li>
                            <li>Work Under Pressure</li>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}