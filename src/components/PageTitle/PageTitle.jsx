import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.css';

export default function PageTitle({ content }) {
  const { pathname } = useLocation();

  return (
        <section className='headline'>
            <button type='button' className='headline__button'></button>
            {pathname === '/' && (
                <h1 className="headline__title">Индивидуальный план развития</h1>)}
            {pathname === '/create-target' && (content)}
            {pathname === '/matrix' && (
                <h1 className="headline__title">Матрица компетенций</h1>)}
        </section>
  );
}
