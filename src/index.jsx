// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './main.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <CartProvider>
        <App />
      </CartProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
