import { createContext } from 'react';

export default createContext({
  initialize: () => Promise,
  toggleEditMode: () => { },
  addNewGoal: () => { },
  deleteGoalByIndex: () => { },
  // deleteEmptyGoal: () => { },
  edit: () => { },
  createPlan: () => { },
  remove: () => { },
  setPlan: () => { },
  targetList: [],
  isEditMode: false,
  goalsComponent: [],
  collectDeleteModeGoals: () => { },
});
