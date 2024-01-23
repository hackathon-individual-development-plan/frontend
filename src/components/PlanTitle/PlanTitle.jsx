import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle.jsx';
import './PlanTitle.css';
import useGoals from '../../providers/PlanProvider/PlanProvider.hook';

export default function PlanTitle({ titleOfPlan }) {
  const { toggleEditMode, isEditMode } = useGoals();

  function handlEditClick() {
    toggleEditMode();
  }

  // change title input
  const [editedTitle, setEditedTitle] = useState(titleOfPlan);
  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };
  const handleInputBlur = () => {
    toggleEditMode();
  };

  const toogleTitleType = () => {
    if (!isEditMode) {
      return <h1 className="headline-plan__title">{titleOfPlan}</h1>;
    }
    return (
      <input
        className="headline-plan__title-edit"
        type="text"
        name="input-plan-name"
        value={editedTitle}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    );
  };

  return (
    <>
      <PageTitle
        content={
          <div className="headline-plan__container">
            {toogleTitleType()}
            <button className="headline-plan__edit" onClick={handlEditClick}></button>
          </div>
        }
      />
    </>
    /* <section className="headline">
      <button type="button" className="headline__button"></button>
      <div className="headline__container">
        <h1 className="headline__title">От Junior к Middle</h1>
        <button className="headline__edit" onClick={handlEditClick}></button>
      </div>
    </section> */
  );
}
