import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Key from './component/Key';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Key />
  </React.StrictMode>
);
