import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './CSS/Footer.css';

const Footer = () => (
  <div className="iconsBar">
    <div className="columnTwo">
      <span><i class="fa fa-github fa-2x" aria-hidden="true"></i></span>
    </div>
    <div className="columnFour">
      <span><i class="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></span>
    </div>
    <div className="columnSix">
      <span><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
    </div>
  </div>
)

export default Footer;
