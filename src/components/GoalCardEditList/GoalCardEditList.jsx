import React from 'react';
import './GoalCardEditList.css';
import ButtonAddGoal from '../ButtonAddGoal/ButtonAddGoal.jsx';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function GoalCardEditList({ listOfGoals }) {
  return (
    <>
      <ButtonAddGoal />
      <ul className="target-card-list">
        {listOfGoals.map((item) => (
          <GoalCardEdit
            key={item.id}
            card={item}
          />
        ))}
      </ul>
    </>
  );
}
