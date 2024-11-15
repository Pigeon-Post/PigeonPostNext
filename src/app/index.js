import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PigeonPostApp from './PigeonPostApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PigeonPostApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);