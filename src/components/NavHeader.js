import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/NavHeader.css';


class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="menuBar">
        <div className="devName">
          <Link to='/'><span>Steven Dilbert</span>
          <span className="devName jobTitle"> | Full Stack Web Developer</span></Link>
        </div>
          <div className="about">
            <Link to='/About'>About Me</Link>
          </div>
          <div className="projects">
            <Link to='/Projects'>Projects</Link>
          </div>
          <div className="contact">
            <Link to='/Contact'>Contact</Link>
          </div>
          <div className="blog">
            <Link to="#">Blog - Coming soon</Link>
          </div>
      </div>
    );
  }
}

export default NavHeader;
