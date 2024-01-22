// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState, useEffect } from 'react';
import GoalProviderContext from './GoalProvider.context';
import targetsFromDB from '../../utils/targets';

const GoalProvider = ({ children }) => {
  const [targetList, setTargetList] = useState(targetsFromDB);
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

  // const renderNewGoalForm = (element) => {
  //   if (isAddGoal) {
  //     return (... (element));
  //   }
  //   return null;
  // };

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
    isEditMode,
    goalsComponent,
    setGoalsComponent,
  };

  return <GoalProviderContext.Provider value={value}>{children}</GoalProviderContext.Provider>;
};

export default GoalProvider;
