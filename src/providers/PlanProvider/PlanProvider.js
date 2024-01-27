// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import PlanProviderContext from './PlanProvider.context';
// import planFromDB from '../../utils/planFromDB';
import { readPlan, updatePlan } from '../../utils/planFromDB';

const PlanProvider = ({ children }) => {
  // state for current plan (at first is null)
  const [plan, setPlan] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

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

  // const filterEmployees = (selectedId) => {
  //   // Фильтрация по статусу
  //   let filteredList = employeesList;
  //   if (selectedId !== 'Все') {
  //     filteredList = employeesList.filter((employee) => employee.status === selectedId);
  //   }
  //   // Фильтрация по поисковому термину
  //   if (searchTerm) {
  //     const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //     filteredList = employeesList.filter((employee) => employee.name.toLowerCase()
  //     === lowerCaseSearchTerm);
  //   }
  //   setFilteredEmployeesList(filteredList);
  // };

  const edit1 = () => { };

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
    isEditMode,
    goalsComponent,
    setGoalsComponent,
  };

  return <PlanProviderContext.Provider value={value}>{children}</PlanProviderContext.Provider>;
};

export default PlanProvider;
