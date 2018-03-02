import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import WebFont from 'webfontloader';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Work Sans', 'sans-serif']
  }
});

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root'));
registerServiceWorker();
