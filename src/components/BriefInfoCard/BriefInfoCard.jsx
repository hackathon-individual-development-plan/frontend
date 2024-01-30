import React from 'react';
import { useLocation } from 'react-router-dom';
import ProgressBarCard from '../ProgressBarCard/ProgressBarCard.jsx';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import photo from '../../images/avatar-1.jpg';
import './BriefInfoCard.css';

export default function BriefInfoCard() {
  const { pathname } = useLocation();
  const { currentUser } = useCurrentUser();

  let avatar; let job; let name;

  switch (pathname) {
    case '/my-idp':
      avatar = currentUser.photo;
      job = currentUser.job_title;
      name = currentUser.fio;
      break;
    default:
      avatar = photo;
      job = 'Junior Java-разработчик';
      name = 'Артемьев Олег Игоревич';
      break;
  }

  return (
    <div className='brief-card'>
      <img className='brief-card__avatar' src={avatar} alt="аватар сотрудника"></img>
      <h3 className='brief-card__title'>{name}</h3>
      <p className='brief-card__job'>{job}</p>
      <ProgressBarCard />
    </div>
  );
}
