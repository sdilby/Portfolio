import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/NavHeader.css';


const NavHeader = () => (
  <div className="menuBar" id="menu">
    <span className="devName">
      <Link to='/'><span>Steven Dilbert</span>
      <span className="devName jobTitle">|  Full Stack Web Developer</span></Link>
    </span>
      <span className="about">
        <Link to='/About'>About Me</Link>
      </span>
      <span className="projects">
        <Link to='/Projects'>Projects</Link>
      </span>
      <span className="contact">
        <Link to='/Contact'>Contact</Link>
      </span>
      <span className="blog">
        <Link to="#">Blog - Coming soon</Link>
      </span>
  </div>
);

export default NavHeader;
