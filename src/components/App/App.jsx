import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import BriefInfoCard from '../BriefInfoCard/BriefInfoCard.jsx';
// import Header from '../Header/Header.jsx';
// import PathToPage from '../PathToPage/PathToPage.jsx';
// import Menu from '../Menu/Menu.jsx';
// import Footer from '../Footer/Footer.jsx';
import CreatePlan from '../../pages/CreatePlan/CreatePlan.jsx';
import Employees from '../../pages/Employees/Employees.jsx';
import Layout from '../Layout/Layout.jsx';
// import FilterEmployeesBar from '../FilterEmployeesBar/FilterEmployeesBar.jsx';

function App() {
  return (
    <div className='body'>
      <div className="page">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Employees />} />
        <Route path='/create-target' element={<CreatePlan />} />
      </Route>
     </Routes>
        {/* <Header />
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
        </Routes>
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
