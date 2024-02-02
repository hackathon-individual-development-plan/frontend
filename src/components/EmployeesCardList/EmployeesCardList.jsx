import React, { useEffect } from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
// import { getEmployees } from '../../utils/api';
import './EmployeesCardList.css';

export default function EmployeesCardList({ onCardClick }) {
  const {
    initialize, filteredEmployeesList, selectedEmployee,
  } = useEmployees();

  useEffect(() => {
    initialize();
  }, []);

  const searchedEmployee = filteredEmployeesList.find(
    (item) => item.employee.fio === selectedEmployee,
  );

  return (
    <section className='employees-list'>
      {selectedEmployee ? (
        <EmployeesCard
          key={searchedEmployee.id}
          employee={searchedEmployee}
          employeeId={searchedEmployee.id}
          onCardClick={onCardClick}
        />
      ) : (
        <ul className="employees-list__items">
          {filteredEmployeesList.map((item) => (
            <EmployeesCard
              key={item.employee.id}
              employee={item}
              employeeId={item.id}
              onCardClick={onCardClick}
            />
          ))
          }
        </ul>)
      }
    </section>
  );
}
