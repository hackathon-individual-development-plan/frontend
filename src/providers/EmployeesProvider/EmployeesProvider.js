/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState, useEffect } from 'react';
import EmployeesProviderContext from './EmployeesProvider.context';
import useCurrentUser from '../CurrentUserProvider/CurrentUserProvider.hook';
import { getEmployees } from '../../utils/api';
import { IPD_STATUS } from '../../utils/constants';

const EmployeesProvider = ({ children }) => {
  const [employeesList, setEmployeesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);

  const { isSenior } = useCurrentUser();

  const initialize = () => {
    if (isSenior) {
      getEmployees()
        .then((data) => {
          const employeesWithStatus = data.map((employee) => {
            if (employee.idp.length === 0) {
              employee.idp.push({ status: IPD_STATUS.EMPTY }); // Добавляем статус "Отсутствует" для пустого массива idp
            }
            return employee;
          });

          setEmployeesList(employeesWithStatus);
          setFilteredEmployeesList(employeesWithStatus);
        })
        .catch((err) => {
          console.error(`Произошла ошибка: ${err}`);
        });
    }
  };

  useEffect(() => {
    initialize(); // Вызов функции initialize при монтировании компонента
  }, [isSenior]);

  const filterEmployees = (selectedId) => {
    let filteredList = employeesList;
    if (selectedId !== 'Все') {
      filteredList = employeesList.filter((employee) => employee.idp[0].status === selectedId);
    }
    setFilteredEmployeesList(filteredList);
  };

  const value = {
    initialize,
    employeesList,
    searchQuery,
    setSearchQuery,
    setSelectedEmployee,
    setEmployeesList,
    setFilteredEmployeesList,
    filteredEmployeesList,
    filterEmployees,
    selectedEmployee,
  };

  return <EmployeesProviderContext.Provider value={value}>{children}</EmployeesProviderContext.Provider>;
};

export default EmployeesProvider;
