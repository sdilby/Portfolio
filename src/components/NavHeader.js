import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
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
      <Navbar dark expand="md">
        <NavbarBrand href="/">
          <span>Steven Dilbert</span>
          <span className="jobTitle"> | Full Stack Web Developer</span>
          </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Blog - Coming soon</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  );
  }
}

export default NavHeader;
