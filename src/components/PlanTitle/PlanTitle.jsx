import React from 'react';
import PageTitle from '../PageTitle/PageTitle.jsx';
import './PlanTitle.css';
import useGoals from '../../providers/PlanProvider/PlanProvider.hook';

// eslint-disable-next-line no-unused-vars
export default function PlanTitle() {
  const {
    toggleEditMode, isEditMode, plan, edit,
  } = useGoals();

  function handlEditClick() {
    toggleEditMode();
  }

  // change title input
  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (event) => {
    edit();
    // setEditedTitle(event.target.value);
  };
  const handleInputBlur = () => {
    toggleEditMode();
  };

  const toogleTitleType = () => {
    if (!isEditMode) {
      return <h1 className="headline-plan__title">{plan?.title}</h1>;
    }
    return (
      <input
        className="headline-plan__title-edit"
        type="text"
        name="input-plan-name"
        value={plan?.title}
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
