import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePlan from '../../pages/CreatePlan/CreatePlan.jsx';
import Employees from '../../pages/Employees/Employees.jsx';
import Layout from '../Layout/Layout.jsx';
// import FilterEmployeesBar from '../FilterEmployeesBar/FilterEmployeesBar.jsx';
import MatrixCompetency from '../../pages/MatrixCompetency/MatrixCompetency.jsx';

function App() {
  return (
    <div className='body'>
      <div className="page">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Employees />} />
        <Route path='/create-target' element={<CreatePlan />} />
        <Route path='/matrix' element={<MatrixCompetency />} />
      </Route>
     </Routes>
      </div>
    </div>
  );
}

export default App;
