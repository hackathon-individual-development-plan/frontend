import React from 'react';
import PageTitle from '../PageTitle/PageTitle.jsx';
import './PlanTitle.css';

export default function PlanTitle() {
  return (
    <>
      <PageTitle content={<div className="headline-plan__container">
        <h1 className="headline-plan__title">От Junior к Middle</h1>
        <button className='headline-plan__edit'></button>
      </div>}
      />
    </>
    /* <section className="headline">
      <button type="button" className="headline__button"></button>
      <div className="headline__container">
        <h1 className="headline__title">От Junior к Middle</h1>
        <button className='headline__edit'></button>
      </div>
    </section> */
  );
}
