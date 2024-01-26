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
import USER_ROLES from '../../utils/constants'; // для демо удалить строку

function App() {
  const navigate = useNavigate();

  const {
    getUserRole, currentUserRole, setUserToken, userToken, isSenior,
  } = useCurrentUser();

  // eslint-disable-next-line no-unused-vars
  const [localStorageData, setLocalStorageData] = useState('');

  // const handleStorageChange = () => {
  //   const tokenFromStorage = localStorage.getItem('jwt');
  //   setLocalStorageData(tokenFromStorage);
  //   setUserToken(tokenFromStorage);
  //   getUserRole('jwt');
  // };

  // useEffect(() => {
  //   // Установка и слушание события storage при монтировании компонента
  //   window.addEventListener('storage', handleStorageChange);

  //   // Инициализация токена и получение роли при монтировании компонента
  //   const initialToken = USER_ROLES[0].senior.jwt;
  //   localStorage.setItem('jwt', initialToken);
  //   setLocalStorageData(initialToken);
  //   setUserToken(initialToken);
  //   getUserRole('jwt');

  //   // Отписка от события storage при размонтировании компонента
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, [getUserRole, setUserToken]);

  // useEffect(() => {
  //   // Обработка изменений после получения данных о пользователе
  //   setLocalStorageData(localStorage.getItem('jwt'));
  //   getUserRole('jwt');
  //   setLocalStorageData(localStorage.getItem('jwt'));

  //   if (currentUserRole === 'senior') {
  //     navigate('/employees', { replace: true });
  //   } else if (currentUserRole === 'employee') {
  //     navigate('/my-idp', { replace: true });
  //   }
  //   console.log(userToken);
  //   console.log(currentUserRole);
  //   console.log(isSenior);
  // }, [currentUserRole, navigate]);

  const handleStorageChange = () => {
    const tokenFromStorage = localStorage.getItem('jwt');
    setLocalStorageData(tokenFromStorage);
    setUserToken(tokenFromStorage);
    getUserRole('jwt');
  };

  useEffect(() => {
    setLocalStorageData(localStorage.getItem('jwt'));

    window.addEventListener('storage', handleStorageChange);

    const initialToken = USER_ROLES[0].senior.jwt;
    localStorage.setItem('jwt', initialToken);
    setLocalStorageData(initialToken);
    getUserRole('jwt');
    setUserToken(localStorageData);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setUserToken(localStorageData);
    getUserRole('jwt');
    setLocalStorageData(localStorage.getItem('jwt'));
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
            <Route path='/employee-plan' element={<EmployeePlan />} />
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
