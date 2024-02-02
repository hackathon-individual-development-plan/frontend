import React from 'react';
import './GoalCardEditList.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import ButtonAddGoal from '../ButtonAddGoal/ButtonAddGoal.jsx';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function GoalCardEditList() {
  const {
    plan,
  } = usePlan();

  const goalsList = plan?.goals;

  return (
    <>
      <ButtonAddGoal />
      <ul className="target-card-list">
        {goalsList && goalsList?.map((item, index) => (
          <GoalCardEdit
            key={item.id}
            cardId={item.id}
            // card={item}
            cardIndex={index}
          />
        ))}
      </ul>
    </>
  );
}
