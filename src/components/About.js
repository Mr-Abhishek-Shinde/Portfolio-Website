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
                <h1 className="secTitle"  data-aos="flip-right">Know More About Me</h1>
                    <div class="addInfo">
                        <h1>About Me -</h1>
                        <p>I am a focused and enthusiastic developer with a keen interest in Software development, Data Science and Machine Learning. I am looking forward to explore this field and apply my knowledge to solve real-world industry problems.</p>
                        <p>I'm an Explorer, Devoted, Empathetic, Consistent Person.</p>

                        <p>Birth-date: 6 August 2003</p>
                        <p>City: Wai, Satara.</p>
                        <p>Email: abhishinde889@gmail.com</p>
                    </div>
                    <div class="hobby">
                        <h1>My Hobbies -</h1>
                        <p>My hobbies include Travelling, Gaming, Coding, Listening Music and Star Gazing.</p>
                        <p>I also enjoy watching Horror and Thriller movies.</p>
                        <p>I also have interest in Quantum Physics. </p>
                    </div>

                    <div class="skills">
                        <h1>My Skills</h1>
                        <p>My skills include:</p>
                        <p>Problem Solving</p>
                        <p>Persistance</p>
                        <p>Team Work</p>
                        <p>Project Management</p>
                        <p>Work Under Pressure</p>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}