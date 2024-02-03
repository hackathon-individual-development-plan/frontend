/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PlanProviderContext from './PlanProvider.context';
import * as api from '../../utils/api';

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

  // render current plan
  const initialize = (employeeId) => {
    if (employeeId) {
      api
        .getEmployeeIdp(employeeId)
        .then((currentPlan) => {
          setPlan(currentPlan);
        })
        .catch((err) => {
          console.error(`Произошла ошибка: ${err}`);
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
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  };

  const createPlan = (data) => {
    api
      .createEmployeeIpd(data)
      .then((currentPlan) => {
        setPlan(currentPlan);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

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

  const deleteGoalByIndex = (cardIndex) => {
    setPlan((prevPlan) => {
      const updPlan = { ...prevPlan };
      updPlan.goals = updPlan.goals.filter((gl, i) => !goalsDeleteMode.includes(i));
      return updPlan;
    });
  };

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
