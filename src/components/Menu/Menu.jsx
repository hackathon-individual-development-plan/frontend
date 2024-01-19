import React from 'react';
import './Menu.css';

function PathToPage() {
  /* const [isActiveButton, setActiveButton] = React.useState(false);
  function handleClick() {
    setActiveButton(!isActiveButton);
  } */

  return (
    <section className='menu'>
      <button type='button' className='menu__exit'></button>
      <div className='menu__group'>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/multiple-users.svg' className='menu__img' alt='Сотрудники' />Сотрудники
        </button>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/add__menu.svg' className='menu__img' alt='Плюс' />Создать ИПР
        </button>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/pages-menu.svg' className='menu__img' alt='Документ' />Мой ИПР
        </button>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/diagram.svg' className='menu__img' alt='Диаграмма' />Матрица компетенций
        </button>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/akademiaMenu.svg' className='menu__img' alt='Академия' />Альфа-Академия
        </button>
        <button type='button' /* onClick={handleClick} */ className='menu__item'>
          <img src='/images/chatMenu.svg' className='menu__img' alt='Чат' />Альфа-помощь
        </button>
      </div>
    </section>
  );
}

export default PathToPage;
