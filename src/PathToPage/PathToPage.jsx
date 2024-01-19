import React from 'react';
import './PathToPage.css';

function PathToPage() {
  return (
    <section className='path-to-page'>
      <p className='path-to-page__text'>Сервисы</p>
      <img src='/images/chevron-right.svg' className='path-to-page__image' alt='Стрелка, указывающая путь' />
      <p className='path-to-page__text'>Индивидуальный план развития</p>
      <img src='/images/chevron-right.svg' className='path-to-page__image' alt='Стрелка, указывающая путь' />
      <p className='path-to-page__text'>Сотрудники</p>
    </section>
  );
}

export default PathToPage;
