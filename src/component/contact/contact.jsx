import React from 'react';
import './contact.css';
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.jpeg'

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>If you have any questions or just want to say hello, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <img src={email} alt="Email" className="contact-icon1" />
                            <p>Email: <a href="mailto:shreyasjagtap734@gmail.com">shreyasjagtap734@gmail.com</a></p>
                        </div>
                        <div className="contact-item">
                            <img src={phone} alt="Phone" className="contact-icon2" />
                            <p>Phone: <a href="tel:+917030028467">+91 70300 28467</a></p>
                        </div>
                        <div className="contact-item">
                            <img src={linkedin} alt="LinkedIn" className="contact-icon3" />
                            <p>LinkedIn: <a href="https://www.linkedin.com/in/shreyas-jagtap-9061a9229" target="_blank">Shreyas Jagtap</a></p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send a Message</h3>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

