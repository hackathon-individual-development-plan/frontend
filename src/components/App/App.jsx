import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import CreatePlan from '../../pages/CreatePlan/CreatePlan.jsx';
import Employees from '../../pages/Employees/Employees.jsx';
import Layout from '../Layout/Layout.jsx';
import MyPlan from '../../pages/MyPlan/MyPlan.jsx';
import MatrixCompetency from '../../pages/MatrixCompetency/MatrixCompetency.jsx';
import EmployeePlan from '../../pages/EmployeePlan/EmployeePlan.jsx';
import PlanProvider from '../../providers/PlanProvider/PlanProvider';

function App() {
  const navigate = useNavigate();

  const { isSenior } = useCurrentUser();

  useEffect(() => {
    if (isSenior) {
      navigate('/employees', { replace: true });
    } else {
      navigate('/my-idp', { replace: true });
    }
  }, [isSenior]);

  return (
    <div className='body'>
      <div className="page">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/my-idp' element={
              <PlanProvider>
                <MyPlan />
              </PlanProvider>
            } />
            <Route path='/matrix' element={<MatrixCompetency />} />
            <Route path='/employee-plan/:employeeId' element={
              <PlanProvider>
                <EmployeePlan />
              </PlanProvider>
            } />

            <Route path='/create-target'
              element={
                <PlanProvider>
                  <ProtectedRoute
                    element={CreatePlan}
                  />
                </PlanProvider>
              } />
            <Route path='/employees'
              element={
                <ProtectedRoute
                  element={Employees}
                />
              } />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
