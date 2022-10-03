import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import callIcon from './img/icons8-phone-96.png';
import mailIcon from './img/icons8-mail-96.png';
import linkedIcon from './img/icons8-linkedin-96.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import { motion } from "framer-motion";

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

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o1f9pkg', 'template_efd1ov5', form.current, 'P1aYXn6qkhPDWCSkG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        setTimeout(() => { e.target.reset(); }, "2000")
    };

    const notify = () => {
        toast("Message sent successfully!!");

    }


    const [Name, onChangeName] = useState("");
    const [Email, onChangeEmail] = useState("");
    const [Msg, onChangeMsg] = useState("");

    const areAllFieldsFilled = (Name !== "") && (Email !== "") && (Msg !== "") && (Email.includes('@'));

    return (
        <motion.div id="contact" initial="out" animate="in" exit="out" transition={pageTrans} variants={pageVariants}>
            <ToastContainer />
            <section className="contactSection section" id="sect">
                <h1 className="contactTitle">Contact Me</h1>
                <div className="contactInfo1">
                    <div className="mob">
                        <img src={callIcon} alt="" />
                        <h1>Call Me on</h1>
                        <h3>+91 7057870097</h3>
                    </div>
                    <div className="mail">
                        <img src={mailIcon} alt="" />
                        <h1>Mail me at</h1>
                        <h3>abhishinde889@gmail.com</h3>
                    </div>
                    <div className="linkedin">
                        <img src={linkedIcon} alt="" />
                        <h1>LinkedIn</h1>
                        <p onClick={() => window.open("https://www.linkedin.com/in/abhishek-shinde-7bb403230/")}>
                            <h3>https://www.linkedin.com/in/ <br /> abhishek-shinde-7bb403230/</h3>
                        </p>
                    </div>
                </div>
                <div className="contactInfo2">
                    <h1 className="contactTitle2">Feel Free To Message Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Your Name</label>
                        <input type="text" name="user_name" placeholder="Tell Me Your Name" autoComplete="off" onChange={ e => onChangeName(e.target.value)} required />
                        <label>Your Email</label>
                        <input type="email" name="user_email" placeholder="Your Mail Id" onChange={ e => onChangeEmail(e.target.value)} required />
                        <label>Message</label>
                        <textarea name="message" placeholder="Say Something..." rows="5" autoComplete="off" onChange={ e => onChangeMsg(e.target.value)} required />
                        <input type="submit" value="Send" onClick={notify} disabled={!areAllFieldsFilled} />
                    </form>
                </div>
            </section>
        </motion.div>
    )
}