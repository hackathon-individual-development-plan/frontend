import React from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './EmployeePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import PlanTitle from '../../components/PlanTitle/PlanTitle.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import DropdownButton from '../../components/DropdownButton/DropdownButton.jsx';
import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';
import GoalCardEditList from '../../components/GoalCardEditList/GoalCardEditList.jsx';

function EmployeePlan() {
  const { initialize, planFromDB, isEditMode } = usePlan();

  initialize();

  // switch a goal card mode
  const renderCardOrEditForm = () => {
    const goalsList = planFromDB.listOfGoals;

    if (isEditMode) {
      return <GoalCardEditList listOfGoals={goalsList} />;
    }

    return <GoalCardList listOfGoals={goalsList} />;
  };

  // switch a title mode
  const renderTitleOrEdit = () => {
    const title = planFromDB.planTitle;

    if (isEditMode) {
      return <PlanTitle titleOfPlan={title} />;
    }
    return <PlanTitle titleOfPlan={title} />;
  };

  // switch a plan status mode
  const renderModeOfPlanStatus = () => {
    // add extra class for small dropdown button
    const smallSizeClass = 'dropdown-button_small';
    if (isEditMode) {
      return <DropdownButton className={smallSizeClass} />;
    }
    return <p className="plan__status-type">В работе</p>;
  };

  return (
    <>
      {/* <PlanTitle /> */}
      {renderTitleOrEdit()}
      <div className="content">
        <section className="content__left-part">
          <Menu />
        </section>
        <section className="content__middle-part">
          <section className="plan">
            <div className="plan__status">
              <p className="plan__status-title">Статус ИПР:</p>
              {renderModeOfPlanStatus()}
            </div>
            {/* <div className="plan__newtarget">
            <button className="plan__add-newtarget-button"></button>
            <p className="plan__add-newtarget-title">Добавить цель</p>
          </div> */}
            {renderCardOrEditForm()}
            <section className="plan__content-buttons">
              <ButtonConfirmation />
              <ButtonCancellation />
            </section>
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
