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
import { readPlan } from '../../utils/planFromDB';

const PlanProvider = ({ children }) => {
  // state for current plan (at first is null)
  const [plan, setPlan] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

  // initialize plan from server
  const initialize = () => readPlan(1).then((currentPlan) => {
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

  const edit = () => {};

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
