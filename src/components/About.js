import './About.css';
import React from "react";

export default function About() {
    return (
        <div id="about">
                <section className="aboutSection section" id="sect">
                    <div className="aboutContainer">
                        <h1 className="secTitle">Know More About Me</h1>
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
                        <div className="exp">
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
                                            <p>90%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="html"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>CSS</p>
                                            <p>85%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="css"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>SASS</p>
                                            <p>80%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="sass"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Java Script</p>
                                            <p>80%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="js"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>React js</p>
                                            <p>75%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="react"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Node js</p>
                                            <p>70%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="node"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Express js</p>
                                            <p>65%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="express"></span>
                                        </div>
                                    </div>
                                    <div className="skill_bar">
                                        <div className="info">
                                            <p>Mongo DB</p>
                                            <p>60%</p>
                                        </div>
                                        <div className="bar">
                                            <span className="mongo"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
    )
}