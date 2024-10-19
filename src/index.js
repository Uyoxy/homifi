import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this path points to the CSS file with Tailwind setup
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
