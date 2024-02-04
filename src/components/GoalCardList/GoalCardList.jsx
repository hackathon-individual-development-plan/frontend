import React from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './GoalCardList.css';
import GoalCard from '../GoalCard/GoalCard.jsx';

export default function GoalCardList() {
  const {
    plan,
  } = usePlan();

  const goalsList = plan?.goals;

  return (
    <ul className="target-card-list">
      {goalsList && goalsList?.map((item, index) => (
        <GoalCard
          key={item.id}
          title={item.title}
          deadline={item.deadline}
          status={item.status}
          description={item.description}
          tasks={item.tasks}
          comments={item.comments}
          cardIndex={index}
        />
      ))}
    </ul>
  );
}
