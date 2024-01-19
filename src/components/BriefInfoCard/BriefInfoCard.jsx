import React from 'react';
import ProgressBarCard from '../ProgressBarCard/ProgressBarCard.jsx';
import './BriefInfoCard.css';
import avatar from '../../images/avatar-1.jpg';

export default function BriefInfoCard() {
  return (
    <div className='brief-card'>
      <img className='brief-card__avatar' src={avatar} alt="аватар сотрудника"></img>
      <h3 className='brief-card__title'>Артемьев Олег Игоревич</h3>
      <p className='brief-card__job'>Junior Java-разработчик</p>
      <ProgressBarCard />
    </div>
  );
}
