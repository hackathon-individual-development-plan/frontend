import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IPD_STATUS } from '../../utils/constants';
import './GoalSelectStatusButton.css';

function GoalSelectStatusButton({ status, cardIndex }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();

  return (
    <>
      <select
        className="dropdown-button-big"
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register(`goals.${cardIndex}.status`)}
      >
        <option value={IPD_STATUS.IN_PROGRESS}>{IPD_STATUS.IN_PROGRESS}</option>
        <option value={IPD_STATUS.DONE}>{IPD_STATUS.DONE}</option>
        <option value={IPD_STATUS.NOT_DONE}>{IPD_STATUS.NOT_DONE}</option>
        <option value={IPD_STATUS.CANCELED}>{IPD_STATUS.CANCELED}</option>
      </select>
    </>
  );
}

export default GoalSelectStatusButton;
