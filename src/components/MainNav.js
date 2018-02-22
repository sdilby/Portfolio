import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const MainNav = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Projects' component={Projects}/>
      <Route path='/Contact' component={Contact}/>
    </Switch>
  </main>
)

export default MainNav;
