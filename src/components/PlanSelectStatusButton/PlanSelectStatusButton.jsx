import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './PlanSelectStatusButton.css';

function PlanSelectStatusButton({ status }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();

  return (
    <div>
      <select className='dropdown-button'
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register('status')}
      >
        <option value="В работе">В работе</option>
        <option value="Выполнен">Выполнен</option>
        <option value="Не выполнен">Не выполнен</option>
        <option value="Отсутсвует">Отсутсвует</option>
      </select>
    </div>
  );
}

export default PlanSelectStatusButton;
