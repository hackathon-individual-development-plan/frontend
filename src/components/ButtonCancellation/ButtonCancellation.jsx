import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function ButtonCancellation() {
  const title = 'Нет, продолжить';
  return (
    <div style={{ minwidth: 128 }}>
      <ButtonDesktop view="secondary" size="s">
        {title}
      </ButtonDesktop>
    </div>
  );
}

export default ButtonCancellation;
