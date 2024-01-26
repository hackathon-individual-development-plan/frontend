// Здесь создается контекст с начальными значениями, включая функции
// initialize, edit, add, remove и массив targetList.

import { createContext } from 'react';

export default createContext({
  initialize: () => Promise,
  filterEmployees: () => { },
  employeesList: [],
  filteredEmployeesList: [],
  searchQuery: '',
  selectedEmployee: null,
});
