import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import '@alfalab/core-components/vars/gaps.css';
import CurrentUserProvider from './providers/CurrentUserProvider/CurrentUserProvider';
import EmployeesProvider from './providers/EmployeesProvider/EmployeesProvider';
// import PlanProvider from './providers/PlanProvider/PlanProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <EmployeesProvider>
          {/* <PlanProvider> */}
          <App />
          {/* </PlanProvider> */}
        </EmployeesProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
