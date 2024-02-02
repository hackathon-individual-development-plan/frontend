import React from 'react';
import './Popup.css';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../ButtonCancellation/ButtonCancellation.jsx';

function PopupCancel({
  isOpen, onClick, popupType, handleCancel,
}) {
  const popupVisibleClass = isOpen ? 'popup_is-opened' : '';
  let popupContent;

  if (popupType === 'popupConfirmation') {
    popupContent = {
      question: 'Вы уверены, что хотите сохранить изменения?',
      buttonYes: 'Сохранить',
      buttonNo: 'Отмена',
    };
  } else if (popupType === 'popupCancellation') {
    popupContent = {
      question: 'Вы уверены, что хотите отменить изменения?',
      buttonYes: 'Да, отменить',
      buttonNo: 'Нет, продолжить',
    };
  }

  return (
    <div className={`popup ${popupVisibleClass}`}>
      <div className="popup__container">
        <h2 className="popup__title">{popupContent.question}</h2>
        <div className="popup__buttons">
          <ButtonConfirmation
          onClick={onClick} buttonText={popupContent.buttonYes} isValid={true} />
          <ButtonCancellation isValid={true}
          onClick={handleCancel} buttonText={popupContent.buttonNo} />
        </div>
      </div>
    </div>
  );
}

export default PopupCancel;
