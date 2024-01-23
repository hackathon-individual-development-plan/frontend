import React from 'react';
import useGoals from '../../providers/PlanProvider/PlanProvider.hook.js';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
import './EmployeesCardList.css';

export default function EmployeesCardList() {
  const { filteredEmployeesList } = useGoals();

  return (
      <section className='employees-list'>
        <ul className="employees-list__items">
          {filteredEmployeesList.map((item) => (
            <EmployeesCard
              key={item.id}
              employee={item}
            />
          ))
          }
        </ul>
      </section>
  );
}
