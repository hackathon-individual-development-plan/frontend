import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function ButtonConfirmation({ isValid, onClick, buttonText }) {
  return (
    <div style={{ minwidth: 128, marginRight: 14 }}>
      <ButtonDesktop disabled={!isValid} view="accent" size="s" type='button' onClick={onClick}>
        {buttonText}
      </ButtonDesktop>
    </div>
  );
}

export default ButtonConfirmation;
