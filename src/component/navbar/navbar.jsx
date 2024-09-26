import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import phone from '../../assets/contactimg.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="menuListItem">
          Home
        </Link>
        <Link activeClass="active" to="aboutContainer" spy={true} offset={-60} duration={500} className="menuListItem">
          About
        </Link>
        <Link activeClass="active" to="project" spy={true} offset={-140} duration={500} className="menuListItem">
          Project
        </Link>
        <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500} className="menuListItem">
          Skills
        </Link>
      </div>
      <button className="menuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <img src={phone} alt="phone" className="contactBtnImg" />
      </button>

      <button className="mobileMenuBtn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
    </nav>
  );
};

export default Navbar;
