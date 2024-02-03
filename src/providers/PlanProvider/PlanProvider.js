// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import PlanProviderContext from './PlanProvider.context';
import * as api from '../../utils/api';
// import planFromDB from '../../utils/planFromDB';
import { readPlan, updatePlan } from '../../utils/planFromDB';

const PlanProvider = ({ children }) => {
  // state for current plan (at first is null)
  const [plan, setPlan] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [goalsComponent, setGoalsComponent] = useState([]);

  const [goalsDeleteMode, setGoalsDeleteMode] = useState([]);
  const collectDeleteModeGoals = (cardIndex) => {
    if (goalsDeleteMode.includes(cardIndex)) {
      // setGoalsDeleteMode(goalsDeleteMode.filter((index) => index !== cardIndex));
    } else {
      setGoalsDeleteMode([...goalsDeleteMode, cardIndex]);
    }
  };

  // render curent plan
  const initialize = (employeeId) => {
    if (employeeId) {
      api
        .getEmployeeIdp(employeeId)
        .then((currentPlan) => {
          setPlan(currentPlan);
        });
    } else {
      setPlan({
        id: null,
        title: 'Введите название ИПР',
        status: 'В работе',
        goals: [],
      });
    }
  };

  const edit = (data, id) => {
    api
      .editEmployeeIdp(data, id)
      .then((currentPlan) => {
        setPlan(currentPlan);
      });
  };

  const createPlan = (data) => {
    api
      .createEmployeeIpd(data)
      .then((currentPlan) => {
        setPlan(currentPlan);
      });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // const addNewGoal = () => {
  //   const newGoal = {
  //     id: 11000,
  //     isNew: true,
  //     title: '',
  //     description: '',
  //     tasks: [],
  //     status: 'Отсутсвует',
  //     created_at: Date.now(),
  //     comments: [],
  //   };
  //   const updPlan = { ...plan };
  //   updPlan.goals.push(newGoal);
  //   setPlan(updPlan);
  // };
  const addNewGoal = () => {
    const newGoal = {
      id: plan.goals.length > 0 ? plan.goals[plan.goals.length - 1].id + 1 : 1,
      isNew: true,
      title: '',
      description: '',
      tasks: [],
      status: 'Отсутсвует',
      created_at: Date.now(),
      comments: [],
    };
    const updPlan = { ...plan };
    updPlan.goals.push(newGoal);
    setPlan(updPlan);
  };

  // const deleteGoalByIndex = (cardIndex) => {
  //   const updPlan = { ...plan };
  //   updPlan.goals.splice(cardIndex, 1);
  //   setPlan(updPlan);
  // };
  const deleteGoalByIndex = (cardIndex) => {
    setPlan((prevPlan) => {
      const updPlan = { ...prevPlan };
      updPlan.goals = updPlan.goals.filter((gl, i) => !goalsDeleteMode.includes(i));
      return updPlan;
    });
  };

  // const deleteGoalByIndex = (cardIndex) => {
  //   const updatedGoals = plan.goals.filter((goal, index) => index !== cardIndex);
  //   const updatedPlan = { ...plan, goals: [...updatedGoals] };
  //   setPlan(updatedPlan);
  // };

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

  const value = {
    initialize,
    toggleEditMode,
    addNewGoal,
    deleteGoalByIndex,
    edit,
    createPlan,
    plan,
    setPlan,
    isEditMode,
    goalsComponent,
    setGoalsComponent,
    setIsEditMode,
    collectDeleteModeGoals,
    goalsDeleteMode,
  };

  return <PlanProviderContext.Provider value={value}>{children}</PlanProviderContext.Provider>;
};

export default PlanProvider;
