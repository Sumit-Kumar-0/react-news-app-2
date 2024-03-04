import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import SearchProvider from './context/SearchProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchProvider>
);
