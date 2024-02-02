import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function ButtonCancellation({ onClick, buttonText }) {
  return (
    <div style={{ minwidth: 128 }}>
      <ButtonDesktop onClick={onClick} view="secondary" size="s" type='button'>
        {buttonText}
      </ButtonDesktop>
    </div>
  );
}

export default ButtonCancellation;
