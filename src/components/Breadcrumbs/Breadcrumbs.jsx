import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs() {
  const { pathname } = useLocation();

  const renderNavLink = (to, text) => (
    <>
      <img src='/images/chevron-right.svg' className='breadcrumbs__image' alt='Стрелка, указывающая путь' />
      <NavLink to={to} className='breadcrumbs__link'>{text}</NavLink>
    </>
  );

  return (
    <nav className='breadcrumbs'>
      <p className='breadcrumbs__link'>Сервисы</p>
      <img src='/images/chevron-right.svg' className='breadcrumbs__image' alt='Стрелка, указывающая путь' />
      <p className='breadcrumbs__link'>Индивидуальный план развития</p>
      {pathname === '/employees' && renderNavLink('/', 'Сотрудники')}
      {pathname === '/create-target' && renderNavLink('/create-target', 'Карточка сотрудника')}
      {pathname === '/matrix' && renderNavLink('/matrix', 'Матрица компетенций')}
      {pathname === '/my-idp' && renderNavLink('/my-idp', 'Мой ИПР')}
      {pathname === '/employee-plan' && (
        <>
          {renderNavLink('/employees', 'Сотрудники')}
          {renderNavLink('/employee-plan', 'Карточка сотрудника')}
        </>
      )}
    </nav>
  );
}

export default Breadcrumbs;
