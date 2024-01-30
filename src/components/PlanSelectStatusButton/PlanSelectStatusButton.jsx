import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './PlanSelectStatusButton.css';

function PlanSelectStatusButton({ status }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();

  return (
    <div>
      <select
        className="dropdown-button"
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register('status')}
      >
        <option value="In progress">В работе</option>
        <option value="Work done">Выполнен</option>
        <option value="Not done">Не выполнен</option>
        <option value="Empty">Отсутсвует</option>
      </select>
    </div>
  );
}

export default PlanSelectStatusButton;
