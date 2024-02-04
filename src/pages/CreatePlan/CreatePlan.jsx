import React, { useEffect, useState } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';

function CreatePlan() {
  const { setPlan, setIsEditMode } = usePlan();

  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
  }, [selectedEmployeeId]);

  const emolID = +selectedEmployeeId;
  useEffect(() => {
    const newPlan = {
      title: 'Введите название ИПР',
      goals: [
        {
          id: 100001,
          isNew: true,
          title: '',
          description: '',
          deadline: '',
          tasks: [],
        },
      ],
      employee: emolID,
    };
    const updPlan = { ...newPlan };
    setPlan(updPlan);
    setIsEditMode(true);
  }, [emolID]);

  return (
    <>
      <EmployeePlan setSelectedEmployeeId={setSelectedEmployeeId} />
    </>
  );
}
export default CreatePlan;
