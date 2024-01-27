import React from 'react';
import { useFormContext } from 'react-hook-form';
import PageTitle from '../PageTitle/PageTitle.jsx';
import './PlanTitle.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';

// eslint-disable-next-line no-unused-vars
export default function PlanTitle() {
  const {
    toggleEditMode, isEditMode, plan,
  } = usePlan();

  function handlEditClick() {
    toggleEditMode();
  }

  // change title input
  // eslint-disable-next-line no-unused-vars
  // const handleInputChange = (event) => {
  //   edit();
  //   // setEditedTitle(event.target.value);
  // };
  // const handleInputBlur = () => {
  //   toggleEditMode();
  // };

  const toogleTitleType = () => {
    // FORM
    const { register } = useFormContext();

    if (!isEditMode) {
      return <h1 className="headline-plan__title">{plan?.title}</h1>;
    }
    return (
      <input type='text'
          className="headline-plan__title-edit"
          defaultValue={plan?.title}
          {...register('title', {
            required: {
              value: false,
            },
          })}/>
    // <input
    //   className="headline-plan__title-edit"
    //   type="text"
    //   name="title"
    //   defaultValue={plan?.title}
    //   // onChange={handleInputChange}
    //   // onBlur={handleInputBlur}
    //   {...register('title', {
    //     required: {
    //       value: false,
    //     },
    //   })}
    // />
    );
  };

  return (
    <>
      <PageTitle
        content={
          <div className="headline-plan__container">
            {toogleTitleType()}
            <a className="headline-plan__edit" onClick={handlEditClick}></a>
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
