import React from 'react';
import './Popup.css';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../ButtonCancellation/ButtonCancellation.jsx';

function PopupCancel({
  isOpen, onClick, handleCancel, question,
}) {
  const popupVisibleClass = isOpen ? 'popup_is-opened' : '';

  return (
    <div className={`popup ${popupVisibleClass}`}>
      <div className="popup__container">
        <h2 className="popup__title">{question}</h2>
        <div className="popup__buttons">
          <ButtonConfirmation
            onClick={onClick} buttonText='Да, отменить' isValid={true} />
          <ButtonCancellation isValid={true}
            onClick={handleCancel} buttonText='Нет, продолжить' />
        </div>
      </div>
    </div>
  );
}

export default PopupCancel;
