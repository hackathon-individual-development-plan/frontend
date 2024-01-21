import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import '@alfalab/core-components/vars/gaps.css';
import TargetProvider from './providers/TargetProvider/TargetProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TargetProvider>
      <App />
    </TargetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
