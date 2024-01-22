import React from 'react';
import './PlanTitle.css';
import useGoals from '../../providers/GoalProvider/GoalProvider.hook';

export default function PlanTitle() {
  const { toggleEditMode } = useGoals();

  function handlEditClick() {
    toggleEditMode();
  }

  return (
    <section className="headline">
      <button type="button" className="headline__button"></button>
      <div className="headline__container">
        <h1 className="headline__title">От Junior к Middle</h1>
        <button className="headline__edit" onClick={handlEditClick}></button>
      </div>
    </section>
  );
}
