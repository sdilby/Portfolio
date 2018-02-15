import React, { Component } from 'react';
import App from 'C:/Users/david/OneDrive/Documents/GitHub/portfolio/src/App';
import './About.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class About extends Component {
  constructor() {
  	super();
  	this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    //alert(`selected ${selectedKey}`);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="navMenu">
            <p>I'm the navMenu</p>
          </div>
          <div className="item item1">
            <p>I'm Sidebar #1</p>
            <button className="navArrowLeft" onClick={this.handleSelect}> Here is an arrow <Route path="/App" component={App}/></button>
          </div>
          <div className="item item2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed.</p>
            <p>Lorem ipsum d</p>
          </div>
          <div className="item item3">
            <p>I'm Sidebar #2</p>
          </div>
          <div className="item footer">
            <p>I'm the footer</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default About;
