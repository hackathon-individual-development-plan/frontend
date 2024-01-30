import React, { useEffect } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';
// import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';

function CreatePlan() {
  const { setPlan, setIsEditMode } = usePlan();

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
    <SearchInput />
    <EmployeePlan />
  </>
  );
}
export default CreatePlan;
