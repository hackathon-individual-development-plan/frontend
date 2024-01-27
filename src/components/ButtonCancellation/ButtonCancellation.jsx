import React from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

function ButtonCancellation() {
  const title = 'Отменить';
  return (
    <div style={{ minwidth: 128 }}>
      <ButtonDesktop view="secondary" size="s" type='submit'>
        {title}
      </ButtonDesktop>
    </div>
  );
}

export default ButtonCancellation;
