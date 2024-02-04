import { createContext } from 'react';

export default createContext({
  initialize: () => Promise,
  filterEmployees: () => { },
  employeesList: [],
  filteredEmployeesList: [],
  searchQuery: '',
  selectedEmployee: null,
});
