import './About.css';
import React from "react";

import { motion } from "framer-motion";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const pageVariants = {
    in: {
        opacity : 1,
    },
    out: {
        opacity : 0,
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
        <motion.div id="about" initial="out" animate="in" exit="out" transition={pageTrans} variants={pageVariants}>
                <section className="aboutSection section" id="sect">
                    <div className="aboutContainer">
                        <h1 className="secTitle"  data-aos="flip-right">Know More About Me</h1>
                        <div className="edu">
                            <h1>Education</h1>
                            <div className="timeline-area">
                                <div>
                                    <h2>College of Engineering, Pune</h2>
                                    <h3>B. Tech. Computer Engineering</h3>
                                    <h4>2021-Present</h4>
                                </div>
                                <div>
                                    <h2>Kalasagar Academy, Wai</h2>
                                    <h3>HSC</h3>
                                    <h4>2019-2021</h4>
                                </div>
                                <div>
                                    <h2>Deccan Education Societys Dravid High-School, Wai</h2>
                                    <h3>SSC</h3>
                                    <h4>2013-2019</h4>
                                </div>
                            </div>
                        </div>
                        <div className="exp" >
                            <h1>Experience</h1>
                            <div className="timeline-area">
                                <div>
                                    <h2>COEP's DSAI club</h2>
                                    <h3>Member</h3>
                                    <h4>2022-Present</h4>
                                </div>
                                <div>
                                    <h2>CSI COEP Student Chapter</h2>
                                    <h3>Member</h3>
                                    <h4>2022-Present</h4>
                                </div>
                                <div>
                                    <h2>COEP Impressions'22</h2>
                                    <h3>Web Coordinator</h3>
                                    <h4>2022-23</h4>
                                </div>
                                <div>
                                    <h2>COEP MindSpark'22</h2>
                                    <h3>Web Coordinator</h3>
                                    <h4>2022</h4>
                                </div>
                            </div>
                        </div>
                       
                        <div className="skillsCont">
                            <div className="skills_section">
                                <div className="skills_head">
                                    <h2>My <span>Skills</span></h2>
                                    <p>Here are my Skills</p>
                                </div>

                                <div className="skills_main">
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>HTML</p>
                                            <p>95%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="html"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>CSS</p>
                                            <p>87%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="css"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Java Script</p>
                                            <p>70%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="js"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>React js</p>
                                            <p>60%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="react"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Python</p>
                                            <p>84%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>C</p>
                                            <p>62%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="c"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </motion.div>
    )
}