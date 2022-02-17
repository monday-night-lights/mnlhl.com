import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';

import './css/main.css';
import './img/favicon.ico';
import './js/main.js';

ReactDOM.render(
    <React.StrictMode><Home /></React.StrictMode>,
    document.getElementById('app')
);
