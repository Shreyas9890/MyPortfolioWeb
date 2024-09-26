import React from 'react';
import './footer.css';
import github from '../../assets/github.png'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.jpeg'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3>Shreyas Jagtap</h3>
                    <p>Full Stack Java Developer</p>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/shreyas-jagtap-9061a9229" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Shreyas9890" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className='g1' />
                        </a>
                        <a href="mailto:shreyasjagtap734@gmail.com">
                            <img src={email} alt="Email" className='g1'/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
