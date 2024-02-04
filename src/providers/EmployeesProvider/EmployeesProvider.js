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
              // Добавляем статус "Отсутствует" для пустого массива idp
              employee.idp.push({ status: IPD_STATUS.EMPTY });
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

  return <EmployeesProviderContext.Provider value={value}>
    {children}</EmployeesProviderContext.Provider>;
};

export default EmployeesProvider;
