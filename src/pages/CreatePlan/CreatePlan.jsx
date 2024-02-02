import React, { useEffect, useState } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
// import SearchInputCreatePlan from
// '../../components/SearchInputCreatePlan/SearchInputCreatePlan.jsx';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';

function CreatePlan() {
  const { setPlan, setIsEditMode } = usePlan();

  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
    console.log(selectedEmployeeId);
  }, [selectedEmployeeId]);

  const emolID = +selectedEmployeeId;
  // const emolID = 7;
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
<<<<<<< HEAD
    <>
      <SearchInputCreatePlan setSelectedEmployeeId={setSelectedEmployeeId} />
      <EmployeePlan />
    </>
=======
  <>
    {/* <SearchInputCreatePlan setSelectedEmployeeId={setSelectedEmployeeId}/> */}
    <EmployeePlan setSelectedEmployeeId={setSelectedEmployeeId}/>
  </>
>>>>>>> develop
  );
}
export default CreatePlan;
