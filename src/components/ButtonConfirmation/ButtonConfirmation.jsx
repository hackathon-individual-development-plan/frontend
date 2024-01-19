import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function ButtonConfirmation() {
  const title = 'Да, отменить';
  return (
    <div style={{ minwidth: 128, marginRight: 14 }}>
      <ButtonDesktop view="accent" size="s">
        {title}
      </ButtonDesktop>
    </div>
  );
}

export default ButtonConfirmation;
