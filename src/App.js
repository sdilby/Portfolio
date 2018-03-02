import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import MainNav from './components/MainNav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import WebFont from 'webfontloader';
import './App.css';

WebFont.load({
  google: {
    families: ['Work Sans', 'sans-serif']
  }
});


class App extends Component {
  render() {
    <div className="App">

      <div className="contentContainer">
        <div className="navMenu">
          <NavHeader/>
        </div>
        <div className="sideLeftNav">
          <SidebarLeft/>
        </div>
        <div className="content">
          <MainNav/>
        </div>
        <div className="sideRightNav">
          <SidebarRight/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>

    </div>
  }
}

export default App;
