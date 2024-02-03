import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProgressBarCard.css';
import { ProgressBar } from '@alfalab/core-components/progress-bar';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';

export default function ProgressBarCard() {
  const { isSenior } = useCurrentUser();
  const { pathname } = useLocation();

  return (
    <div className='progress-bar'>
      <p className='progress-bar__title'>Прогресс выполнения ИПР</p>
      <div className='progress-bar__container'>
      <ProgressBar value={isSenior && (pathname === '/my-idp' || pathname === '/matrix') ? 0 : 50} fullWidth='false' className='progress-bar__custom' />
        {isSenior && (pathname === '/my-idp' || pathname === '/matrix')
          ? (
            <p className='progress-bar__result'>0/<span className='progress-bar__total'>0</span></p>
          ) : (
            <p className='progress-bar__result'>1/<span className='progress-bar__total'>2</span></p>
          )}
      </div>
    </div>
  );
}
