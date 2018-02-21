import React, { Component } from 'react';
import About from './components/About';
import NavHeader from './components/NavHeader';
import Home from './components/Home';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';
import './App.css';


const App = () => (
  <div className="App">
    <div className="contentContainer">
      <div className="navMenu">
        <NavHeader/>
      </div>
      <div className="sideLeftNav">
        <SidebarLeft/>
      </div>
      <div className="content">
        <Home/>
      </div>
      <div className="sideRightNav">
        <SidebarRight/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  </div>
)

export default App;
