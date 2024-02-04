import React from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './ButtonAddGoal.css';

export default function ButtonAddGoal() {
  const { addNewGoal } = usePlan();

  function handleAddClick() {
    addNewGoal();
  }

  return (
    <>
      <div className="newtarget">
        <button className="newtarget__button" onClick={handleAddClick}></button>
        <p className="newtarget__title">Добавить цель</p>
      </div>
    </>
  );
}
