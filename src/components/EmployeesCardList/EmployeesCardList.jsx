import React from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
import './EmployeesCardList.css';

export default function EmployeesCardList() {
  const { filteredEmployeesList, selectedEmployee } = useEmployees();

  const searchedEmployee = filteredEmployeesList.find((item) => item.name === selectedEmployee);

  return (
    <section className='employees-list'>
      {selectedEmployee ? (
        <EmployeesCard
          key={searchedEmployee.id}
          employee={searchedEmployee}
        />
      ) : (
        <ul className="employees-list__items">
          {filteredEmployeesList.map((item) => (
            <EmployeesCard
              key={item.id}
              employee={item}
            />
          ))
          }
        </ul>)
      }
    </section>
  );
}
