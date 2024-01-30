/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
// import './CreatePlan.css';
// import '../../components/CommonPageContent/CommonPageContent.css';
// import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
// import GoalCardEdit from '../../components/GoalCardEdit/GoalCardEdit.jsx';
// import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
// import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// import SearchInput from '../../components/SearchInput/SearchInput.jsx';
// import PageTitle from '../../components/PageTitle/PageTitle.jsx';
// // import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
// import ButtonAddGoal from '../../components/ButtonAddGoal/ButtonAddGoal.jsx';
// import Menu from '../../components/Menu/Menu.jsx';
// // import Calendar from '../../components/Calendar/Calendar.jsx';
// import cardsTarget from '../../utils/cardsTarget';
// import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';

// function CreatePlan() {
//   const { setPlan } = usePlan();
//   const newPlan = {
//     id: null,
//     title: '',
//     status: 'Отсутсвует',
//     goals: [],
//   };
//   useEffect(() => {
//     setPlan(newPlan);
//     // toggleEditMode();
//   }, [newPlan]);

// get employee id by searching
// const employeeId = 3;

// return (
//   <>
//     <SearchInput />
//     <EmployeePlan employeeId={employeeId} />
//   </>
// );

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

// return (
//   <>
//     <div className="content">
//       <section className="content__left-part">
//         <Menu />
//       </section>
//       <section className="content__middle-part">
//       <PageTitle content={<input
//         className="content__input-title"
//         type="text"
//         name="input-plan-name"
//         placeholder={placeholderName}
//         onFocus={handlePlaceholderFocus}
//         onBlur={handlePlaceholderBlur}
//       />} />
//         <SearchInput />
//         <section className="plan">
//           <div className="plan__status">
//             <p className="plan__status-title">Статус ИПР:</p>
//           </div>
//           <ButtonAddGoal />
//           {/* {cardsTarget.map((item) => (
//             <GoalCardEdit key={item.id} cardTarget={item} />
//           ))} */}
//           <section className="plan__content-buttons">
//             <ButtonConfirmation />
//             <ButtonCancellation />
//           </section>
//         </section>
//       </section>

//     {/* <section className="content__right-part">
//     <BriefInfoCard />
//     <Calendar />
//   </section> */}
//   </div>
// </>
// );
// }

// export default CreatePlan;

/* eslint-disable no-param-reassign */
// import React, { useEffect } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
// import '../EmployeePlan/EmployeePlan.css';
// import '../../components/CommonPageContent/CommonPageContent.css';
// import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
// import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// import SearchInput from '../../components/SearchInput/SearchInput.jsx';
// import PlanTitle from '../../components/PlanTitle/PlanTitle.jsx';
// import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
// import Menu from '../../components/Menu/Menu.jsx';
// import PlanSelectStatusButton from '../../components/PlanSelectStatusButton/PlanSelectStatusButton.jsx';
// import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';
// import GoalCardEditList from '../../components/GoalCardEditList/GoalCardEditList.jsx';

// function CreatePlan({ employeeId }) {
//   const {
//     initialize, isEditMode, plan, createPlan, toggleEditMode,
//   } = usePlan();

//   useEffect(() => {
//     initialize();
//   }, []);

//   // switch a goal card mode
//   const renderCardOrEditForm = () => {
//     if (isEditMode) {
//       return <GoalCardEditList />;
//     }
//     return <GoalCardList />;
//   };

//   // switch a title mode
//   const renderTitleOrEdit = () => {
//     const planTitle = plan?.title;

//     if (isEditMode) {
//       return <PlanTitle titleOfPlan={planTitle} />;
//     }
//     return <PlanTitle titleOfPlan={planTitle} />;
//   };

//   // switch a plan status mode
//   const renderModeOfPlanStatus = () => {
//     const statusName = plan?.status;

//     if (isEditMode) {
//       return <PlanSelectStatusButton status={statusName} />;
//     }
//     return <p className={`plan__status-type ${statusName === 'В работе' ? 'blue' : ''} ${statusName === 'Выполнен' ? 'green' : ''} ${statusName === 'Не выполнен' ? 'red' : ''} ${statusName === 'Отсутствует' ? 'grey' : ''} `}>
//       {statusName}
//     </p>;
//   };

//   // FORM
//   const formMethods = useForm({
//     mode: 'onChange',
//   });
//   // Form field change handler:
//   const onSubmit = (data) => {
//     // eslint-disable-next-line no-unused-vars

//     const idsToKeep = new Set(plan.goals.map((item) => item.id?.toString()));

//     // Filter the first array based on the presence of ids in the second array
//     const filteredArray = data.goals.filter((item) => idsToKeep.has(item.id.toString()));
//     // eslint-disable-next-line no-param-reassign
//     data.goals = filteredArray;
//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < data.goals.length; i++) {
//       if (data.goals[i].isNew) {
//         delete data.goals[i].id;
//       }
//       delete data.goals[i].isNew;
//     }
//     // eslint-disable-next-line no-unused-vars
//     const fd = formMethods;
//     createPlan(data);
//     toggleEditMode();
//   };

//   return (
//     <div className="content">
//       <section className="content__left-part">
//         <Menu />
//       </section>
//       <SearchInput />
//       <FormProvider {...formMethods}>
//         <form onSubmit={formMethods.handleSubmit(onSubmit)}>
//           <section className="content__middle-part">
//             {renderTitleOrEdit()}
//             <section className="plan">
//               <div className="plan__status">
//                 <p className="plan__status-title">Статус ИПР:</p>
//                 {renderModeOfPlanStatus()}
//               </div>
//               {renderCardOrEditForm()}
//               <section className="plan__content-buttons">
//                 {isEditMode ? (
//                   <>
//                     <ButtonConfirmation isValid={formMethods.formState.isValid} type="submit" onClick={onSubmit} />
//                     <ButtonCancellation />
//                   </>
//                 ) : null}
//               </section>
//             </section>
//           </section>
//         </form >
//       </FormProvider >

//       <section className="content__right-part">
//         <BriefInfoCard />
//       </section>
//     </div >
//   );
// }
// export default CreatePlan;
