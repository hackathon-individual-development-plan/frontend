// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import GoalProviderContext from './GoalProvider.context';
import targetsFromDB from '../../utils/targets';
import { employees } from '../../utils/employees';

const GoalProvider = ({ children }) => {
  const [targetList, setTargetList] = useState(targetsFromDB);
  const [employeesList, setEmployeesList] = useState(employees);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState(employeesList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

  const initialize = () => {
    useEffect(() => {
      setTargetList(targetsFromDB);
    }, [targetsFromDB]);
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
    setTargetList();
  };

  const remove = () => {
    setTargetList();
  };

  const value = {
    initialize,
    toggleEditMode,
    addNewGoal,
    edit,
    add,
    remove,
    targetList,
    employeesList,
    isEditMode,
    goalsComponent,
    setGoalsComponent,
    filterEmployees,
    filteredEmployeesList,

  };

  return <GoalProviderContext.Provider value={value}>{children}</GoalProviderContext.Provider>;
};

export default GoalProvider;
