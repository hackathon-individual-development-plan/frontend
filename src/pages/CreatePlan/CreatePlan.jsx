import React, { useEffect, useState } from 'react';
import './CreatePlan.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import useGoals from '../../providers/GoalProvider/GoalProvider.hook';
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

function CreatePlan() {
  const { setGoalsComponent } = useGoals();

  const [placeholderName, setPlaceholderName] = useState('Введите название ИПР');

  const handlePlaceholderFocus = () => {
    setPlaceholderName('');
  };

  const handlePlaceholderBlur = () => {
    setPlaceholderName('Введите название ИПР');
  };

  useEffect(() => {
    setGoalsComponent([]);
  }, []);

  return (
    <>
      <PageTitle content={<input
        className="content__input-title"
        type="text"
        name="input-plan-name"
        placeholder={placeholderName}
        onFocus={handlePlaceholderFocus}
        onBlur={handlePlaceholderBlur}
      />} />
      <div className="content">
        <section className="content__left-part">
          <Menu />
        </section>

        <section className="content__middle-part">
          {/* <input
            className="content__input-title"
            type="text"
            name="input-plan-name"
            placeholder={placeholderName}
            onFocus={handlePlaceholderFocus}
            onBlur={handlePlaceholderBlur}
          /> */}
          <SearchInput />
          <section className="plan">
            <div className="plan__status">
              <p className="plan__status-title">Статус ИПР:</p>
            </div>
            {/* <div className="plan__newtarget">
              <button className="plan__add-newtarget-button"></button>
              <p className="plan__add-newtarget-title">Добавить цель</p>
            </div> */}
            <ButtonAddGoal />
            {cardsTarget.map((item) => (
              <GoalCardEdit
                key={item.id}
                cardTarget={item}
              />
            ))
            }
            <section className="plan__content-buttons">
              <ButtonConfirmation />
              <ButtonCancellation />
            </section>
          </section>
        </section>

        {/* <section className="content__right-part">
        <BriefInfoCard />
        <Calendar />
      </section> */}
      </div>
    </>
  );
}

export default CreatePlan;
