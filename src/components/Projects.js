import './Projects.css';
import React from "react";
import msImg from './img/mindspark.jpg';
import impImg from './img/impressions.jpg';

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

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);
      
    return (
        <motion.div id="projects" initial="out" animate="in" exit="out" transition={pageTrans} variants={pageVariants}>
            <section className="projectsSection section" id="sect">
                <div className="projectTitle" data-aos="flip-up">
                    <h1>My Works</h1>
                    <p>My work mainly consists of website development for COEP MindSpark and COEP Impressions.</p>
                </div>
                <div className="projectsContainer">
                    <div className="pro1">
                        <img src={msImg} alt="" />
                        <div className="taskInfo">
                            <h3>Mindspark Events Page</h3>
                            <h5>Task for Induction</h5>
                            <p className='accessible1' onClick={() => window.open("https://mr-abhishek-shinde.github.io/MindSpark-Events/")}>Click
                                To Open</p>
                        </div>
                    </div>

                    <div className="pro2">
                        <img src={msImg} alt="" />
                        <div className="taskInfo">
                            <h3>MindSpark'22 Sponsors Page</h3>
                            <h5>Page for official site</h5>
                            <p>Working on it</p>
                        </div>
                    </div>

                    <div className="pro3">
                        <img src={impImg} alt="" />
                        <div className="taskInfo">
                            <h3>Impressions'22 Events Description Page</h3>
                            <h5>Page for official site</h5>
                            <p>Working on it</p>
                        </div>
                    </div>

                    <div className="pro4">
                        <img src={impImg} alt="" />
                        <div className="taskInfo">
                            <h3>Impressions'22 Pre-Events Page</h3>
                            <h5>Page for official site</h5>
                            <p>Working on it</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}