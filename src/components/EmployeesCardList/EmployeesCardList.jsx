import React from 'react';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
import { employees } from '../../utils/employees';
import './EmployeesCardList.css';

export default function EmployeesCardList() {
  return (
    <section className='employees-list'>
      <ul className="employees-list__items">
        {employees.map((item) => (
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
