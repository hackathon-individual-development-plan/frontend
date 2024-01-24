/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import PlanProviderContext from './PlanProvider.context';
// import planFromDB from '../../utils/planFromDB';
import { readPlan } from '../../utils/planFromDB';
import { employees } from '../../utils/employees';

const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState(null);
  const [employeesList, setEmployeesList] = useState(employees);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

  // const initialize = () => {
  //   useEffect(() => {
  //     setTargetList(plansFromDB);
  //   }, [plansFromDB]);
  // };

  const initialize = () => readPlan(1);
  // useEffect(() => {
  //   readPlan(1).then((p) => setPlan(p));
  // }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const addNewGoal = (element) => {
    const newGoal = element;
    setGoalsComponent((prevGoalsComponent) => [...prevGoalsComponent, newGoal]);
  };

  const filterEmployees = (selectedId) => {
    if (selectedId === 'Все') {
      setFilteredEmployeesList(employeesList);
      return;
    }
    const filteredList = employeesList.filter((employee) => employee.status === selectedId);
    setFilteredEmployeesList(filteredList);
  };

  const edit = () => {
  };

  const add = () => {
    // setTargetList();
  };

  const remove = () => {
    // setTargetList();
  };

  const value = {
    initialize,
    toggleEditMode,
    addNewGoal,
    edit,
    add,
    remove,
    plan,
    employeesList,
    isEditMode,
    goalsComponent,
    setGoalsComponent,
    filterEmployees,
    filteredEmployeesList,

  };

  return <PlanProviderContext.Provider value={value}>{children}</PlanProviderContext.Provider>;
};

export default PlanProvider;
