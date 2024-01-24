import React, { useEffect } from 'react';
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
  const { initialize, isEditMode, plan } = usePlan();

  useEffect(() => {
    initialize();
  }, []);
  // initialize();

  // switch a goal card mode
  const renderCardOrEditForm = () => {
    const goalsList = plan?.goals;

    if (isEditMode) {
      return <GoalCardEditList listOfGoals={goalsList} />;
    }
    return <GoalCardList listOfGoals={goalsList} />;
  };

  // switch a title mode
  const renderTitleOrEdit = () => {
    const planTitle = plan?.title;

    if (isEditMode) {
      return <PlanTitle titleOfPlan={planTitle} />;
    }
    return <PlanTitle titleOfPlan={planTitle} />;
  };

  // switch a plan status mode
  const renderModeOfPlanStatus = () => {
    // add extra class for small dropdown button
    const smallSizeClass = 'dropdown-button_small';
    const statusName = plan?.status;

    if (isEditMode) {
      return <DropdownButton className={smallSizeClass} />;
    }
    return <p className="plan__status-type">{statusName}</p>;
  };

  return (
    <>
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
