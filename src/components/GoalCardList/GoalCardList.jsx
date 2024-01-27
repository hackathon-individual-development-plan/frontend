import React from 'react';
import './GoalCardList.css';
import GoalCard from '../GoalCard/GoalCard.jsx';

export default function GoalCardList({ listOfGoals }) {
  return (
    <ul className="target-card-list">
      {listOfGoals && listOfGoals?.map((item) => (
        <GoalCard
          key={item.id}
          title={item.title}
          deadline={item.deadline}
          status={item.status}
          description={item.description}
          tasks={item.tasks}
          comments={item.comments}
        />
      ))}
    </ul>
  );
}
