/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './EmployeePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
import PlanTitle from '../../components/PlanTitle/PlanTitle.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import PlanSelectStatusButton from '../../components/PlanSelectStatusButton/PlanSelectStatusButton.jsx';
import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';
import GoalCardEditList from '../../components/GoalCardEditList/GoalCardEditList.jsx';
import SearchInputCreatePlan from '../../components/SearchInputCreatePlan/SearchInputCreatePlan.jsx';
import PopupSave from '../../components/Popups/PopupSave.jsx';
import PopupCancel from '../../components/Popups/PopupCancel.jsx';

// function EmployeePlan({ employeeId }) {
function EmployeePlan({ setSelectedEmployeeId }) {
  const { pathname } = useLocation();
  const { employeeId } = useParams();
  const {
    // eslint-disable-next-line no-unused-vars
    initialize, isEditMode, plan, edit, toggleEditMode, createPlan, goalsDeleteMode, deleteGoalByIndex,
  } = usePlan();

  useEffect(() => {
    initialize(employeeId);
  }, [employeeId]);

  // switch a goal card mode
  const renderCardOrEditForm = () => {
    if (isEditMode) {
      return <GoalCardEditList />;
    }
    return <GoalCardList />;
  };

  // switch a title mode
  const renderTitleOrEdit = () => {
    const planTitle = plan?.title;

    if (isEditMode) {
      return <>
        <PlanTitle titleOfPlan={planTitle} />
        {pathname === '/create-target' && <SearchInputCreatePlan setSelectedEmployeeId={setSelectedEmployeeId} />}
      </>;
    }
    return <PlanTitle titleOfPlan={planTitle} />;
  };

  // switch a plan status mode
  const renderModeOfPlanStatus = () => {
    const statusName = plan?.status;

    if (isEditMode) {
      return <PlanSelectStatusButton status={statusName} />;
    }
    return <p className={`plan__status-type ${statusName === 'В работе' ? 'blue' : ''} ${statusName === 'Выполнен' ? 'green' : ''} ${statusName === 'Не выполнен' ? 'red' : ''} ${statusName === 'Отменен' ? 'yellow' : ''} `}>
      {statusName}
    </p>;
  };

  // FORM
  const formMethods = useForm({
    mode: 'onChange',
  });

  // Submit form:
  const onSubmit = (data) => {
    // added assignment of employee explicitelly as it is not assigned by form input
    if (!data.employee && plan.employee) data.employee = plan.employee;
    // eslint-disable-next-line no-unused-vars

    const idsToKeep = new Set(plan.goals.map((item) => item.id?.toString()));

    // Filter the first array based on the presence of ids in the second array
    const filteredArray = data.goals.filter((item) => idsToKeep.has(item.id.toString()));
    // eslint-disable-next-line no-param-reassign
    data.goals = filteredArray;

    data.goals = data.goals.filter((gl, i) => !goalsDeleteMode.includes(i));
    deleteGoalByIndex();

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.goals.length; i++) {
      if (data.goals[i].isNew) {
        delete data.goals[i].id;
      }
      delete data.goals[i].isNew;
    }
    // eslint-disable-next-line no-unused-vars
    const fd = formMethods;
    if (plan.id) {
      data.employee = plan.employee;
      edit(data, plan.id);
    } else createPlan(data);

    toggleEditMode();
  };

  // POPUPS
  const [isPopupConfirm, setIsPopupConfirm] = useState(false);
  const [isPopupCancel, setIsPopupCancel] = useState(false);
  // open popup
  const onClickPopup = (popupType) => {
    if (popupType === 'popupCancellation') {
      setIsPopupCancel(true);
    } else setIsPopupConfirm(true);
  };
  // cancel and go to edit mode
  const handleCancel = (event) => {
    event.preventDefault();
    setIsPopupConfirm(false);
    setIsPopupCancel(false);
  };
  // cancel changes, go to original read mode
  const handleOriginal = (event) => {
    event.preventDefault();
    formMethods.reset();
    toggleEditMode();
    setIsPopupConfirm(false);
    setIsPopupCancel(false);
  };
  // change and submit a plan
  const submitButtonRef = useRef(null);
  const popupSubmit = () => {
    submitButtonRef.current.click();
    setIsPopupConfirm(false);
    setIsPopupCancel(false);
  };

  return (
    <div className="content">
      <section className="content__left-part">
        <Menu />
      </section>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <input type="hidden" value={plan?.employee} {...formMethods.register('employee')} />
          <section className="content__middle-part">
            {renderTitleOrEdit()}
            <section className="plan">
              <div className="plan__status">
                <p className="plan__status-title">Статус ИПР:</p>
                {renderModeOfPlanStatus()}
              </div>
              {renderCardOrEditForm()}
              <section className="plan__content-buttons">
                {isEditMode ? (
                  <>
                    <ButtonConfirmation isValid={formMethods.formState.isValid}
                      type="button" onClick={onClickPopup} buttonText="Сохранить" />
                    <ButtonCancellation type="popupCancellation" onClick={() => onClickPopup('popupCancellation')}
                      buttonText="Отменить" />
                    <input className='plan__notvisible-input' type='submit' ref={submitButtonRef} />
                  </>
                ) : null}
              </section>
            </section>
          </section>
        </form >
      </FormProvider >

      {pathname !== '/create-target'
        && (<section className="content__right-part">
          <BriefInfoCard />
        </section>)}
      <PopupSave
        isOpen={isPopupConfirm}
        onClick={popupSubmit}
        handleCancel={handleCancel}
        question='Вы уверены, что хотите сохранить изменения?'
      />
      <PopupCancel
        isOpen={isPopupCancel}
        onClick={handleOriginal}
        handleCancel={handleCancel}
        question='Вы уверены, что хотите отменить изменения?'
      />
    </div >
  );
}
export default EmployeePlan;
