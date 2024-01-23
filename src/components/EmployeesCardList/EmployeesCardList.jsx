import React from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
import './EmployeesCardList.css';

export default function EmployeesCardList() {
  const { filteredEmployeesList } = usePlan();

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
