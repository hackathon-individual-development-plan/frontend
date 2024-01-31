import React, { useEffect, useState } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import SearchInputCreatePlan from '../../components/SearchInputCreatePlan/SearchInputCreatePlan.jsx';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';
// import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';

function CreatePlan() {
  const { setPlan, setIsEditMode } = usePlan();

  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
    console.log(selectedEmployeeId);
  }, [selectedEmployeeId]);

  // const { selectedEmployee } = useEmployees();

  // useEffect(() => {
  //   const newPlan = {
  //     title: 'Введите название ИПР',
  //     // status: 'In progress',
  //     goals: [
  //       {
  //         id: 100001,
  //         isNew: true,
  //         title: '',
  //         description: '',
  //         deadline: '',
  //         tasks: [],
  //       },
  //     ],
  //     employee: selectedEmployee,
  //   };
  //   const updPlan = { ...newPlan };
  //   setPlan(updPlan);
  //   setIsEditMode(true);
  // }, [selectedEmployee]);
  const emolID = 5;
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
    <SearchInputCreatePlan setSelectedEmployeeId={setSelectedEmployeeId}/>
    <EmployeePlan />
  </>
  );
}
export default CreatePlan;
