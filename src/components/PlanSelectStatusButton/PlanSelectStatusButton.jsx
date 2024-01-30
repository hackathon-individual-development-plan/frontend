import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './PlanSelectStatusButton.css';

function PlanSelectStatusButton({ status }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();

  //   return (
  //     <div>
  //       <select
  //         className="dropdown-button"
  //         defaultValue={statusState}
  //         onChange={(e) => {
  //           const selectedStatus = e.target.value;
  //           setStatusState(selectedStatus);
  //         }}
  //         {...register('status')}
  //       >
  //         <option value="In progress">In progress</option>
  //         <option value="Work done">Work done</option>
  //         <option value="Not done">Not done</option>
  //         <option value="Empty">Empty</option>
  //       </select>
  //     </div>
  //   );
  // }

  return status ? (
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
      <option value="In progress">In progress</option>
      <option value="Work done">Work done</option>
      <option value="Not done">Not done</option>
      <option value="Empty">Empty</option>
    </select>
  </div>
  ) : null;
}

export default PlanSelectStatusButton;
