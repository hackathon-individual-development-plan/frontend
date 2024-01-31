import React, { useEffect, useState } from 'react';
// import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import SearchInput from '../SearchInput/SearchInput.jsx';
import { getEmployeesWithoutIdp } from '../../utils/api';

export default function SearchInputCreatePlan({ setSelectedEmployeeId }) {
  const [EmployeesWithoutIdp, setEmployeesWithoutIdp] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

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
  }

  function onSearch(searchTerm) {
    const selectedEmployee = EmployeesWithoutIdp.find((item) => item.employee.fio === searchTerm);
    setSelectedEmployeeId(selectedEmployee.employee.id);
    setSearchQuery(selectedEmployee.employee.fio);
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
      />
    </>
  );
}
