import React from 'react';
import './ProgressBarCard.css';
import { ProgressBar } from '@alfalab/core-components/progress-bar';

export default function ProgressBarCard() {
  return (
    <div className='progress-bar'>
      <p className='progress-bar__title'>Прогресс выполнения ИПР</p>
      <div className='progress-bar__container'>
        <ProgressBar value={50} fullWidth='false' className='progress-bar__custom' />
        <p className='progress-bar__result'>1/<span className='progress-bar__total'>2</span></p>
      </div>
    </div>
  );
}
