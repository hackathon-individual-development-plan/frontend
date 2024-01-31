import React from 'react';
import './Employees.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import SearchInputAllEmployees from '../../components/SearchInputAllEmployees/SearchInputAllEmployees.jsx';
import EmployeesCardList from '../../components/EmployeesCardList/EmployeesCardList.jsx';
import FilterEmployeesBar from '../../components/FilterEmployeesBar/FilterEmployeesBar.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Menu from '../../components/Menu/Menu.jsx';

function Employees({ onCardClick }) {
  return (
    <div className="content">
      <section className="content__left-part">
        <Menu />
      </section>

      <section className="content__middle-part">
        <PageTitle />
        <SearchInputAllEmployees />
        <section className="employees">
          <EmployeesCardList onCardClick={onCardClick}/>
        </section>
      </section>

      <section className="content__right-part">
        <FilterEmployeesBar />
      </section>
    </div>
  );
}

export default Employees;
