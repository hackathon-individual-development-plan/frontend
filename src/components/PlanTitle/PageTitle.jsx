import React from 'react';
import './PlanTitle.css';

export default function PlanTitle() {
  return (
    <section className="headline">
      <button type="button" className="headline__button"></button>
      <div className="headline__container">
        <h1 className="headline__title">От Junior к Middle</h1>
        <button className='headline__edit'></button>
      </div>
    </section>
  );
}
