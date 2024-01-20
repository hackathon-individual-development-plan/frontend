import React from 'react';
import './Popup.css';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../ButtonCancellation/ButtonCancellation.jsx';

function Popup() {
  const popupContent = [
    {
      checkPositiveAction: {
        question: 'Вы уверены, что хотите сохранить изменения?',
        buttonYes: 'Сохранить',
        buttonNo: 'Отмена',
      },
    },
    {
      checkNeutralAction: {
        question: 'Вы уверены, что хотите отменить изменения?',
        buttonYes: 'Да, отменить',
        buttonNo: 'Нет, продолжить',
      },
    },
    {
      checkNegativeAction: {
        question: 'Вы хотите сохранить изменения?',
        buttonYes: 'Сохранить',
        buttonNo: 'Не сохранять',
      },
    },
  ];

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Close window button" type="button"></button>
        <h2 className="popup__title">{}</h2>
        <div className="popup__buttons">
          <ButtonConfirmation />
          <ButtonCancellation />
        </div>
      </div>
    </div>
  );
}

export default Popup;
