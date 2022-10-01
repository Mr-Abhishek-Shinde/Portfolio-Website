import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


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
    };

    return (
        <div id="contact">
            <section className="contactSection section" id="sect">
                <h1 className="contactTitle">Contact Me</h1>
                <div className="contactContainer">
                    <div className="contactInfo1">
                        <div className="mob">
                            <img src="img/icons8-phone-96.png" alt="" />
                            <h1>Call Me on</h1>
                            <h3>+91 7057870097</h3>
                        </div>
                        <div className="mail">
                            <img src="img/icons8-mail-96.png" alt="" />
                            <h1>Mail me at</h1>
                            <h3>abhishinde889@gmail.com</h3>
                        </div>
                        <div className="linkedin">
                            <img src="img/icons8-linkedin-96.png" alt="" />
                            <h1>LinkedIn</h1>
                            <a href="https://www.linkedin.com/in/abhishek-shinde-7bb403230/">
                                <h3>https://www.linkedin.com/in/ <br /> abhishek-shinde-7bb403230/</h3>
                            </a>
                        </div>
                    </div>
                    <h1 className="contactTitle">Message Me</h1>
                    <div className="contactInfo2">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}