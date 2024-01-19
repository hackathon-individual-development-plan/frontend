import React from 'react';
import './Employees.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import EmployeesCardList from '../../components/EmployeesCardList/EmployeesCardList.jsx';
// import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';

function Employees() {
  return (
    <div className="content">
      <section className="content__left-part"></section>

      <section className="content__middle-part">
        <h1 className="content__title">Индивидуальный план развития</h1>
        <SearchInput />
        <section className="employees">
          <EmployeesCardList />
        </section>
      </section>

      <section className="content__right-part">{/* <BriefInfoCard /> */}</section>
    </div>
  );
}

export default Employees;
