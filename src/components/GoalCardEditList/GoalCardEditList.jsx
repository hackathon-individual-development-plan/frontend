import React from 'react';
import './GoalCardEditList.css';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function GoalCardEditList({ targetList }) {
  return (
    <ul className="target-card-list">
      {targetList.map((item) => (
        <GoalCardEdit
          key={item.id}
          card={item}
        />
      ))}
    </ul>
  );
}
