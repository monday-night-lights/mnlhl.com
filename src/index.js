import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'components/home/Home';

import 'static/css/main.css';
import 'static/img/favicon.ico';
import 'static/js/main.js';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('app')
);
