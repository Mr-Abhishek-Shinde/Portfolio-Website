import './Home.css';
import React from "react";
import userImg from './img/dummyImg.png';

export default function Home() {
    return (
        <div id="home">
            <section className="homeSection section" id="sect">
                <div className="homeContainer">
                    <div className="myInfo">
                        <h2>Hello!<span class="wave">👋</span> I'm</h2>
                        <h1 className="myName">Abhishek Shinde</h1>
                        <h2 className="shortInfo">A Creative Web Developer from <span>COEP</span></h2>
                        <p>I am SY student at COEP currently pursuing B.Tech in Computer Science and I am a Creative
                            Web Developer...</p>
                    </div>
                    <div className="myPhoto">
                        <img src={userImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}