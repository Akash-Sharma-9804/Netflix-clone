// import { StrictMode } from 'react';
import React from 'react'
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL= 'https://netflix-clone-backend-fi4i.onrender.com/';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
