import React from 'react';
import './Popup.css';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation.jsx';
import ButtonCancellation from '../ButtonCancellation/ButtonCancellation.jsx';

function Popup() {
  const question = 'Вы уверены, что хотите сохранить изменения?';

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Close window button" type="button"></button>
        <h2 className="popup__title">{question}</h2>
        <div className="popup__buttons">
          <ButtonConfirmation />
          <ButtonCancellation />
        </div>
      </div>
    </div>
  );
}

export default Popup;
