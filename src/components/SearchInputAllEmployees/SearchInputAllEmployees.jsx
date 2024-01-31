/* eslint-disable max-len */
import React, { useEffect } from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import SearchInput from '../SearchInput/SearchInput.jsx';

export default function SearchInputAllEmployees() {
  const {
    searchQuery, setSearchQuery, setSelectedEmployee, filteredEmployeesList,
  } = useEmployees();

  function onChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function onSearch(searchTerm) {
    setSelectedEmployee(searchTerm);
    setSearchQuery(searchTerm);
  }

  useEffect(() => {
    setSearchQuery('');
    setSelectedEmployee(null);
  }, []);

  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        onChange={onChange}
        array={filteredEmployeesList}
        onSearch={onSearch}
      />
    </>
  );
}
