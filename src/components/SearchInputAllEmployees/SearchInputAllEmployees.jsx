import React, { useEffect } from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import SearchInput from '../SearchInput/SearchInput.jsx';

export default function SearchInputAllEmployees() {
  const {
    searchQuery,
    setSearchQuery,
    setSelectedEmployee,
    filteredEmployeesList,
    employeesList,
    setFilteredEmployeesList,
  } = useEmployees();

  function onSearch(searchTerm) {
    setSelectedEmployee(searchTerm);
    setSearchQuery(searchTerm);
    if (searchTerm === '') {
      const allEmployees = employeesList;
      setFilteredEmployeesList(allEmployees);
    }
  }

  function onChange(evt) {
    setSearchQuery(evt.target.value);
    if (evt.target.value === '') {
      onSearch('');
    }
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
