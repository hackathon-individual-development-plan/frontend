import React from 'react';
import './GoalCardEditList.css';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function GoalCardEditList({ targetList }) {
  return (
    <ul className="target-card-list">
      {targetList.map((item) => (
        <GoalCardEdit
          key={item.id}
          title={item.title}
          deadline={item.deadline}
          status={item.status}
          description={item.description}
          tasks={item.tasks}
          comments={item.comments}
          cardTarget={item}
        />
      ))}
    </ul>
  );
}
