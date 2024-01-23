import React from 'react';
import useGoals from '../../providers/GoalProvider/GoalProvider.hook';
import './EmployeePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
// import ButtonConfirmation from '../../components/ButtonConfirmation/ButtonConfirmation.jsx';
// import ButtonCancellation from '../../components/ButtonCancellation/ButtonCancellation.jsx';
// import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import PlanTitle from '../../components/PlanTitle/PlanTitle.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import GoalCardList from '../../components/GoalCardList/GoalCardList.jsx';
import GoalCardEditList from '../../components/GoalCardEditList/GoalCardEditList.jsx';

function EmployeePlan() {
  const {
    initialize,
    targetList,
    isEditMode,
  } = useGoals();

  initialize();

  // ДЛЯ РЕЖИМА РЕДАКТИРОВАНИЯ
  // const [placeholderName, setPlaceholderName] = useState('Введите название ИПР');
  // const handlePlaceholderFocus = () => {
  //   setPlaceholderName('');
  // };
  // const handlePlaceholderBlur = () => {
  //   setPlaceholderName('Введите название ИПР');
  // };
  const renderCardOrEditForm = () => {
    if (isEditMode) {
      return <GoalCardEditList targetList={targetList} />;
    }

    return <GoalCardList targetList={targetList} />;
  };

  return (
    <>
      <PlanTitle />
      <div className="content">
        <section className="content__left-part">
          <Menu />
        </section>
        <section className="content__middle-part">
          <section className="plan">
            <div className="plan__status">
              <p className="plan__status-title">Статус ИПР:</p>
              <p className="plan__status-type">В работе</p>
            </div>
            {/* <div className="plan__newtarget">
            <button className="plan__add-newtarget-button"></button>
            <p className="plan__add-newtarget-title">Добавить цель</p>
          </div> */}
            {renderCardOrEditForm()}
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
