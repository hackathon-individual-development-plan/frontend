import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput.jsx';
import '../SearchInput/SearchInput.css';
import { getEmployeesWithoutIdp } from '../../utils/api';

export default function SearchInputCreatePlan({ setSelectedEmployeeId }) {
  const [EmployeesWithoutIdp, setEmployeesWithoutIdp] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isActiveError, setActiveError] = useState(false);

  useEffect(() => {
    getEmployeesWithoutIdp()
      .then((data) => {
        setEmployeesWithoutIdp(data);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  }, []);

  function onChange(evt) {
    setSearchQuery(evt.target.value);
    if (searchQuery.length === 0) {
      setActiveError(false);
    } else {
      setActiveError(true);
    }
  }

  function onSearch(searchTerm) {
    const selectedEmployee = EmployeesWithoutIdp.find((item) => item.employee.fio === searchTerm);
    setSelectedEmployeeId(selectedEmployee.employee.id);
    setSearchQuery(selectedEmployee.employee.fio);
    setActiveError(false);
  }

  useEffect(() => {
    setSearchQuery('');
    setSelectedEmployeeId('');
  }, []);

  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        onChange={onChange}
        array={EmployeesWithoutIdp}
        onSearch={onSearch}
        isActiveError={isActiveError}
      />
    </>
  );
}
