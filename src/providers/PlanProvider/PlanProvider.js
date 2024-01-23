// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import PlanProviderContext from './PlanProvider.context';
import planFromDB from '../../utils/planFromDB';
import { employees } from '../../utils/employees';

const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState(planFromDB);
  const [employeesList, setEmployeesList] = useState(employees);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

  // const initialize = () => {
  //   useEffect(() => {
  //     setTargetList(plansFromDB);
  //   }, [plansFromDB]);
  // };

  const initialize = () => {
    useEffect(() => {
      setPlan(planFromDB);
    }, [planFromDB]);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode); // Инвертируем текущее состояние режима редактирования
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
    planFromDB,
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
