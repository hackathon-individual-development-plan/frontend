import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import CreatePlan from '../../pages/CreatePlan/CreatePlan.jsx';
import Employees from '../../pages/Employees/Employees.jsx';
import Layout from '../Layout/Layout.jsx';
import MyPlanSenior from '../../pages/MyPlanSenior/MyPlanSenior.jsx';
import MatrixCompetency from '../../pages/MatrixCompetency/MatrixCompetency.jsx';
import EmployeePlan from '../../pages/EmployeePlan/EmployeePlan.jsx';
import { USER_ROLES } from '../../utils/constants'; // для демо удалить строку

function App() {
  const navigate = useNavigate();

  const {
    getUserRole, currentUserRole, setUserToken, userToken, isSenior,
  } = useCurrentUser();

  const [localStorageData, setLocalStorageData] = useState('');

  const handleStorageChange = () => {
    const tokenFromStorage = localStorage.getItem('token');
    setLocalStorageData(tokenFromStorage);
    setUserToken(tokenFromStorage);
    getUserRole('token');
  };

  useEffect(() => {
    setLocalStorageData(localStorage.getItem('token'));

    window.addEventListener('storage', handleStorageChange);

    const initialToken = USER_ROLES[0].senior.token;
    localStorage.setItem('token', initialToken);
    setLocalStorageData(initialToken);
    getUserRole('token');
    setUserToken(localStorageData);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setUserToken(localStorageData);
    getUserRole('token');
    setLocalStorageData(localStorage.getItem('token'));
    if (currentUserRole === 'senior') {
      navigate('/employees', { replace: true });
    } else if (currentUserRole === 'employee') {
      navigate('/my-idp', { replace: true });
    }
    console.log(currentUserRole);
    console.log(isSenior);
  }, [currentUserRole, localStorageData, userToken]);

  return (
    <div className='body'>
      <div className="page">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/my-idp' element={<MyPlanSenior />} />
            <Route path='/matrix' element={<MatrixCompetency />} />
            <Route path='/employee-plan' element={<EmployeePlan employeeId={1} />} />
            <Route path='/create-target'
              element={
                <ProtectedRoute
                  element={CreatePlan}
                />
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
