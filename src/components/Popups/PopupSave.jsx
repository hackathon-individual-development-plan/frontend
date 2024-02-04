import React from 'react';
import './Popup.css';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../ButtonCancellation/ButtonCancellation.jsx';

function PopupSave({
  isOpen, onClick, handleCancel, question,
}) {
  const popupVisibleClass = isOpen ? 'popup_is-opened' : '';

  return (
    <div className={`popup ${popupVisibleClass}`}>
      <div className="popup__container">
        <h2 className="popup__title">{question}</h2>
        <div className="popup__buttons">
          <ButtonConfirmation isValid={true} onClick={onClick} buttonText="Сохранить" />
          <ButtonCancellation isValid={true} onClick={handleCancel} buttonText="Отмена" />
        </div>
      </div>
    </div>
  );
}

export default PopupSave;
