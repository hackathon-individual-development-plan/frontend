// import React, { useState } from 'react';
// import useTargets from '../../providers/TargetProvider/TargetProvider.hook';
// import './EmployeePlan.css';
// import '../../components/CommonPageContent/CommonPageContent.css';
// // import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
// // import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// // import SearchInput from '../../components/SearchInput/SearchInput.jsx';
// import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
// import Menu from '../../components/Menu/Menu.jsx';
// import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';

// function EmployeePlan() {
//   const {
//     initialize,
//     // edit,
//     // add,
//     // remove,
//     targetList,
//   } = useTargets();

//   initialize();

//   const [placeholderName, setPlaceholderName] = useState('Введите название ИПР');
//   const handlePlaceholderFocus = () => {
//     setPlaceholderName('');
//   };
//   const handlePlaceholderBlur = () => {
//     setPlaceholderName('Введите название ИПР');
//   };

//   return (
//     <div className="content">
//       <section className="content__left-part">
//         <Menu />
//       </section>

//       <section className="content__middle-part">
//         <input
//           className="content__input-title"
//           type="text"
//           name="input-plan-name"
//           placeholder={placeholderName}
//           onFocus={handlePlaceholderFocus}
//           onBlur={handlePlaceholderBlur}
//         />
//         {/* <SearchInput /> */}
//         <section className="plan">
//           <div className="plan__status">
//             <p className="plan__status-title">Статус ИПР:</p>
//             <p className="plan__status-type">В работе</p>
//           </div>
//           {/* <div className="plan__newtarget">
//             <button className="plan__add-newtarget-button"></button>
//             <p className="plan__add-newtarget-title">Добавить цель</p>
//           </div> */}
//           <GoalCardList targetList={targetList}/>
//           {/* <section className="plan__content-buttons">
//             <ButtonConfirmation />
//             <ButtonCancellation />
//           </section> */}
//         </section>
//       </section>

//       <section className="content__right-part">
//         <BriefInfoCard />
//       </section>
//     </div>
//   );
// }

// export default EmployeePlan;

import React from 'react';
import useTargets from '../../providers/TargetProvider/TargetProvider.hook';
import './EmployeePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
// import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
// import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';

function EmployeePlan() {
  const {
    initialize,
    // edit,
    // add,
    // remove,
    targetList,
  } = useTargets();

  initialize();

  // ДЛЯ РЕЖИМА РЕДАКТИРОВАНИЯ
  // const [placeholderName, setPlaceholderName] = useState('Введите название ИПР');
  // const handlePlaceholderFocus = () => {
  //   setPlaceholderName('');
  // };
  // const handlePlaceholderBlur = () => {
  //   setPlaceholderName('Введите название ИПР');
  // };

  return (
    <>
    <PageTitle />
    <div className="content">
      <section className="content__left-part">
        <Menu />
      </section>

      <section className="content__middle-part">
        {/* ДЛЯ РЕЖИМА РЕДАКТИРОВАНИЯ */}
        {/* <input
          className="content__input-title"
          type="text"
          name="input-plan-name"
          placeholder={placeholderName}
          onFocus={handlePlaceholderFocus}
          onBlur={handlePlaceholderBlur}
        /> */}
        {/* <SearchInput /> */}
        <section className="plan">
          <div className="plan__status">
            <p className="plan__status-title">Статус ИПР:</p>
            <p className="plan__status-type">В работе</p>
          </div>
          {/* <div className="plan__newtarget">
            <button className="plan__add-newtarget-button"></button>
            <p className="plan__add-newtarget-title">Добавить цель</p>
          </div> */}
          <GoalCardList targetList={targetList}/>
          {/* <section className="plan__content-buttons">
            <ButtonConfirmation />
            <ButtonCancellation />
          </section> */}
        </section>
      </section>

      <section className="content__right-part">
        <BriefInfoCard />
      </section>
    </div>
    </>
  );
}

export default EmployeePlan;
