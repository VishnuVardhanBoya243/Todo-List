//index.js - Serves as the entry point for your React application

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
