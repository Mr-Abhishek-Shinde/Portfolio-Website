import '../styles/Projects.css';
import React from "react";
import msImg from '../img/mindspark.jpg';
import impImg from '../img/impressions.jpg';

import { motion } from "framer-motion";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

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
                    <ProjectCard title="Impressions'23 Website" info="Official site" link="https://impressionscoeptech.com" img={impImg} />
                    <ProjectCard title="Impressions'22 Events Page" info="Page for official site" link="https://mr-abhishek-shinde.github.io/Impressions-22-Events/" img={impImg} />
                    <ProjectCard title="Mindspark Events Page" info="Task for Induction" link="https://mr-abhishek-shinde.github.io/MindSpark-Events/" img={msImg} />
                </div>
            </section>
        </motion.div>
    )
}