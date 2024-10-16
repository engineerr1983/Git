// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global CSS file
import App from './App';  // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Mounts the App component into the element with id 'root'
);
