import React from 'react';
import useGoals from '../../providers/GoalProvider/GoalProvider.hook';
import './ButtonAddGoal.css';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function ButtonAddGoal() {
  const { addNewGoal, goalsComponent } = useGoals();

  function handleAddClick() {
    addNewGoal(<GoalCardEdit />);
  }

  return (
    <>
      <div className="newtarget">
        <button className="newtarget__button" onClick={handleAddClick}></button>
        <p className="newtarget__title">Добавить цель</p>
      </div>
      {goalsComponent.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </>
  );
}
