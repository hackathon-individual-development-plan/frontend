import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.css';

export default function PageTitle({ content }) {
  const { pathname } = useLocation();
  let title = '';

  if (pathname === '/') {
    title = 'Индивидуальный план развития';
  } else if (pathname === '/create-target') {
    title = content;
  } else if (pathname === '/matrix') {
    title = 'Матрица компетенций';
  } else if (pathname === '/my-idp') {
    title = 'Индивидуальный план развития';
  } else if (pathname === '/employee-plan') {
    title = content;
  }

  return (
    <section className='headline'>
      <button type='button' className='headline__button'></button>
      {title && <h1 className="headline__title">{title}</h1>}
    </section>
  );
}
