import React from 'react';
import { NavLink } from 'react-router-dom';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import './Menu.css';

function Menu() {
  const { isSenior } = useCurrentUser();

  const onClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className='menu'>
      <nav className='menu__group'>
        <ul className='menu__list'>
          {isSenior
            ? <>
              <li className='menu__element'>
                <NavLink to='/employees' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`}>
                  <img src='/images/multiple-users.svg' className='menu__img' alt='Сотрудники' />Сотрудники
                </NavLink>
              </li>
              <li className='menu__element'>
                <NavLink to='/create-target' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`}>
                  <img src='/images/add__menu.svg' className='menu__img' alt='Плюс' />Создать ИПР
                </NavLink>
              </li>
            </> : <></>}
          <li className='menu__element'>
            <NavLink to='/my-idp' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`}>
              <img src='/images/pages-menu.svg' className='menu__img' alt='Документ' />Мой ИПР
            </NavLink>
          </li>
          <li className='menu__element'>
            <NavLink to='/matrix' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`}>
              <img src='/images/diagram.svg' className='menu__img' alt='Диаграмма' />Матрица компетенций
            </NavLink>
          </li>
          <li className='menu__element'>
            <NavLink to='/alfa-academy' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`} onClick={onClick}>
              <img src='/images/akademiaMenu.svg' className='menu__img' alt='Академия' />Альфа-Академия
            </NavLink>
          </li>
          <li className='menu__element'>
            <NavLink to='alfa-help' className={({ isActive }) => `menu__link ${isActive ? 'menu__link_is_active' : ''}`} onClick={onClick}>
              <img src='/images/chatMenu.svg' className='menu__img' alt='Чат' />Альфа-помощь
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Menu;
