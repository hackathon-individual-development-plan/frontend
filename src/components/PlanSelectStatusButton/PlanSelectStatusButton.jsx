import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IPD_STATUS } from '../../utils/constants';
import './PlanSelectStatusButton.css';

function PlanSelectStatusButton({ status }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();

  return status ? (
    <>
      <select
        className="dropdown-button"
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register('status')}
      >
        <option value={IPD_STATUS.IN_PROGRESS}>{IPD_STATUS.IN_PROGRESS}</option>
        <option value={IPD_STATUS.DONE}>{IPD_STATUS.DONE}</option>
        <option value={IPD_STATUS.NOT_DONE}>{IPD_STATUS.NOT_DONE}</option>
        <option value={IPD_STATUS.CANCELED}>{IPD_STATUS.CANCELED}</option>
      </select>
    </>
  ) : null;
}

export default PlanSelectStatusButton;
