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
