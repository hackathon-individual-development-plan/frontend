/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import GoalCardEdit from '../../components/GoalCardEdit/GoalCardEdit.jsx';
import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
// import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import ButtonAddGoal from '../../components/ButtonAddGoal/ButtonAddGoal.jsx';
import Menu from '../../components/Menu/Menu.jsx';
// import Calendar from '../../components/Calendar/Calendar.jsx';
import cardsTarget from '../../utils/cardsTarget';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';

function CreatePlan() {
  const { setPlan } = usePlan();
  const newPlan = {
    id: null,
    title: '',
    status: 'Отсутсвует',
    goals: [],
  };
  //   useEffect(() => {
  //     setPlan(newPlan);
  //     // toggleEditMode();
  //   }, [newPlan]);

  // get employee id by searching
  const employeeId = 3;

  return (
    <div>
      <SearchInput />
      <EmployeePlan employeeId={employeeId} />
    </div>
  );

  // placeholder
  // const [placeholderName, setPlaceholderName] = useState('Введите название ИПР');
  // const handlePlaceholderFocus = () => {
  //   setPlaceholderName('');
  // };
  // const handlePlaceholderBlur = () => {
  //   setPlaceholderName('Введите название ИПР');
  // };

  // // useEffect(() => {
  // //   setGoalsComponent([]);
  // // }, []);

  //   return (
  //     <>
  //       {/* <PageTitle /> */}
  //       <div className="content">
  //         <section className="content__left-part">
  //           <Menu />
  //         </section>
  //         <section className="content__middle-part">
  //           <SearchInput />
  //           <section className="plan">
  //             <div className="plan__status">
  //               <p className="plan__status-title">Статус ИПР:</p>
  //             </div>
  //             <ButtonAddGoal />
  //             {/* {cardsTarget.map((item) => (
  //               <GoalCardEdit key={item.id} cardTarget={item} />
  //             ))} */}
  //             <section className="plan__content-buttons">
  //               <ButtonConfirmation />
  //               <ButtonCancellation />
  //             </section>
  //           </section>
  //         </section>

//         {/* <section className="content__right-part">
//         <BriefInfoCard />
//         <Calendar />
//       </section> */}
//       </div>
//     </>
//   );
}

export default CreatePlan;
