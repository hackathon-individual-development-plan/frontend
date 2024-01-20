import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__menu'>
        <img src='/images/LogoAlfaPeople.svg' className='header__logo' alt='Логотип' />
        <h1 className='header__title'>Alfa People</h1>
        <nav className='header__navigation'>
          <ul className='header__list'>
            <li className='header__link'>Контакты</li>
            <li className='header__link'>Всё о работе</li>
            <li className='header__link'>Подразделения</li>
          </ul>
        </nav>
      </div>
      <div className='header__account'>
        <img src='/images/bell.svg' className='header__bell' alt='Уведомления' />
        <ButtonDesktop view='primary' shape='rectangular' size='xxs' className='header__button' >
          Альфа-рубли: 5000
        </ButtonDesktop>
        <img src='/images/Avatar.svg' className='header__avatar' alt='Аватар' />
      </div>
    </header>
  );
}

export default Header;
