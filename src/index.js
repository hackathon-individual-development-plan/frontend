import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import '@alfalab/core-components/vars/gaps.css';
import GoalProvider from './providers/GoalProvider/GoalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoalProvider>
      <App />
    </GoalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
