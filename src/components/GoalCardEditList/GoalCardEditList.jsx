import React, { useEffect } from 'react';
import './GoalCardEditList.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import ButtonAddGoal from '../ButtonAddGoal/ButtonAddGoal.jsx';
import GoalCardEdit from '../GoalCardEdit/GoalCardEdit.jsx';

export default function GoalCardEditList({ listOfGoals }) {
  const { setGoalsComponent } = usePlan();

  useEffect(() => {
    setGoalsComponent([]);
  }, []);

  return (
    <>
      <ButtonAddGoal />
      <ul className="target-card-list">
        {listOfGoals && listOfGoals?.map((item, index) => (
          <GoalCardEdit
            key={item.id}
            card={item}
            cardIndex={index}
          />
        ))}
      </ul>
    </>
  );
}
