import React, { Component } from 'react';
import './CSS/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.bgImage = this.bgImage.bind(this);
  }

  bgImage = (props) => {
    const imageUrl = require(`./img/bg.jpg`)
  }

  render() {
    return <div style={{ backgroundImage: `url(${imageUrl})` }}>
        <p className="welcome"> Welcome to my portfolio page. </p>
        <p className="clickBelow"> I've been learning Javascript, Python, and Spanish for 7 months
          while living abroad in Mexico.</p>
          <div className="buttonDiv">
            <button className="enter" size="lg">Come take a look</button>
          </div>
    </div>

  }
}

export default Home;
