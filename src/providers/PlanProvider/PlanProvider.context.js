// Здесь создается контекст с начальными значениями, включая функции
// initialize, edit, add, remove и массив targetList.

import { createContext } from 'react';

export default createContext({
  initialize: () => Promise,
  toggleEditMode: () => { },
  addNewGoal: () => { },
  edit: () => { },
  add: () => { },
  remove: () => { },
  targetList: [],
  employeesList: [],
  filteredEmployeesList: [],
  isEditMode: false,
  goalsComponent: [],
});
