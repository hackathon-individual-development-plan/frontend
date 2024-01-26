/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState } from 'react';
import EmployeesProviderContext from './EmployeesProvider.context';
import { employeesDB } from '../../utils/employees';

const EmployeesProvider = ({ children }) => {
  const [employeesList, setEmployeesList] = useState(employeesDB);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);

  const filterEmployees = (selectedId) => {
    let filteredList = employeesList;
    if (selectedId !== 'Все') {
      filteredList = employeesList.filter((employee) => employee.status === selectedId);
    }
    setFilteredEmployeesList(filteredList);
  };

  const value = {
    employeesList,
    searchQuery,
    setSearchQuery,
    setSelectedEmployee,
    filteredEmployeesList,
    filterEmployees,
    selectedEmployee,
  };

  return <EmployeesProviderContext.Provider value={value}>{children}</EmployeesProviderContext.Provider>;
};

export default EmployeesProvider;
