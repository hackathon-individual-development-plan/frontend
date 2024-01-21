import React from 'react';
import './Footer.css';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__up'>
        <div className='footer__links'>
          <a className='footer__link' href='#'>Главная</a>
          <a className='footer__link' href='#'>Сервисы</a>
          <a className='footer__link' href='#'>Контакты</a>
          <a className='footer__link' href='#'>Подразделения</a>
          <a className='footer__link' href='#'>Всё о работе</a>
          <a className='footer__link' href='#'>Академия</a>
          <a className='footer__link' href='#'>SAP АХД</a>
          <a className='footer__link' href='#'>Заказ HR-услуг</a>
          <a className='footer__link' href='#'>Заказ IT-услуг</a>
          <a className='footer__link' href='#'>WSS Docs</a>
          <a className='footer__link' href='#'>Карьера в банке</a>
          <a className='footer__link' href='#'>Сайт Альфа Банка</a>
        </div>
        <div className='footer__contacts'>
          <div className='footer__app'>
            <img src='/images/appFooter.svg' className='footer__image-app' alt='Приложение Альфа' />
            <div className='footer__app-text-container'>
              <h3 className='footer__app-title'>Мобильное приложение</h3>
              <p className='footer__app-footnote'>Для iOS и Android</p>
            </div>
          </div>
          <div className='footer__icons'>
            <img src='/images/telegram.svg' className='footer__image-app' alt='Telegram' />
            <img src='/images/Vk.svg' className='footer__image-app' alt='VK' />
            <img src='/images/YouTube.svg' className='footer__image-app' alt='YouTube' />
          </div>
        </div>
      </div>
      <div className='footer__down'>
        <ul className='footer__help-group'>
          <li className='footer__help'>Help Desk | IT-поддержка</li>
          <li className='footer__help'>Human Help | HR-поддержка</li>
        </ul>
        <ButtonDesktop size='xxs' shape='rectangular' view='secondary' className='footer__button-help'>
          Помощь
        </ButtonDesktop>
      </div>
    </footer>
  );
}

export default Footer;
