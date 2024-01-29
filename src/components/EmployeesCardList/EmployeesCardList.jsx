import React, { useEffect } from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import EmployeesCard from '../EmployeesCard/EmployeesCard.jsx';
import { getEmployees } from '../../utils/api';
import './EmployeesCardList.css';

export default function EmployeesCardList() {
  const { filteredEmployeesList, selectedEmployee } = useEmployees();

  const searchedEmployee = filteredEmployeesList.find(
    (item) => item.employee.fio === selectedEmployee,
  );

  useEffect(() => {
    getEmployees()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  }, []);

  return (
    <section className='employees-list'>
      {selectedEmployee ? (
        <EmployeesCard
          key={searchedEmployee.id}
          employee={searchedEmployee}
          employeeId={searchedEmployee.id}
        />
      ) : (
        <ul className="employees-list__items">
          {filteredEmployeesList.map((item) => (
            <EmployeesCard
              key={item.employee.id}
              employee={item}
              employeeId={item.id}
            />
          ))
          }
        </ul>)
      }
    </section>
  );
}
