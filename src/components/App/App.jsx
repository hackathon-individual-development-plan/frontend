import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import BriefInfoCard from '../BriefInfoCard/BriefInfoCard.jsx';
import Header from '../Header/Header.jsx';
import PathToPage from '../PathToPage/PathToPage.jsx';
// import Menu from '../Menu/Menu.jsx';
import Footer from '../Footer/Footer.jsx';
import CreatePlan from '../../pages/CreatePlan/CreatePlan.jsx';
import Employees from '../../pages/Employees/Employees.jsx';
// import FilterEmployeesBar from '../FilterEmployeesBar/FilterEmployeesBar.jsx';
import MatrixCompetency from '../../pages/MatrixCompetency/MatrixCompetency.jsx';

function App() {
  return (
    <div className='body'>
      <div className="page">
        <Header />
        <PathToPage />
        <Routes>
          <Route
            path='/'
            element={(
              <>
                <Employees />
              </>
            )}
          />
          <Route
            path='/create-target'
            element={(
              <>
                <CreatePlan />
              </>
            )}
          />
          <Route
            path='/matrix-competency'
            element={(
              <>
                <MatrixCompetency />
              </>
            )}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
