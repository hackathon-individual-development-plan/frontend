// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import PlanProviderContext from './PlanProvider.context';
// import planFromDB from '../../utils/planFromDB';
import { readPlan, updatePlan } from '../../utils/planFromDB';
import { employees } from '../../utils/employees';

const PlanProvider = ({ children }) => {
  // state for current plan (at first is null)
  const [plan, setPlan] = useState(null);
  const [employeesList, setEmployeesList] = useState(employees);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // initialize plan from server (readPlan - API function. (1) - plan id from BD)
  const initialize = () => readPlan(1).then((currentPlan) => {
    setPlan(currentPlan);
  });

  // edit plan
  const edit = (data) => updatePlan(data).then((currentPlan) => {
    setPlan(currentPlan);
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const addNewGoal = (element) => {
    const newGoal = element;
    setGoalsComponent((prevGoalsComponent) => [...prevGoalsComponent, newGoal]);
  };

  const deleteEmptyGoal = (uniqueId) => {
    setGoalsComponent((prevGoalsComponent) => prevGoalsComponent
      .filter((element) => element.props.uniqueId !== uniqueId));
  };

  // const filterEmployees = (selectedId) => {
  //   if (selectedId === 'Все') {
  //     setFilteredEmployeesList(employeesList);
  //     return;
  //   }
  //   const filteredList = employeesList.filter((employee) => employee.status === selectedId);
  //   setFilteredEmployeesList(filteredList);
  // };

  const filterEmployees = (selectedId) => {
    // Фильтрация по статусу
    let filteredList = employeesList;
    if (selectedId !== 'Все') {
      filteredList = employeesList.filter((employee) => employee.status === selectedId);
    }
    // Фильтрация по поисковому термину
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredList = employeesList.filter((employee) => employee.name.toLowerCase()
      === lowerCaseSearchTerm);
    }
    setFilteredEmployeesList(filteredList);
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
    deleteEmptyGoal,
    edit,
    add,
    remove,
    plan,
    employeesList,
    isEditMode,
    goalsComponent,
    searchTerm,
    setSearchTerm,
    setGoalsComponent,
    setFilteredEmployeesList,
    filterEmployees,
    filteredEmployeesList,
  };

  return <PlanProviderContext.Provider value={value}>{children}</PlanProviderContext.Provider>;
};

export default PlanProvider;
