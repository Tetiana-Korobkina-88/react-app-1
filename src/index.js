import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Key from './component/Key';
import Counter from './component/Counter'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Key />
    <Counter />
  </React.StrictMode>
);
