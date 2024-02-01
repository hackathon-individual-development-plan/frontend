import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProgressBarCard from '../ProgressBarCard/ProgressBarCard.jsx';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
// import photo from '../../images/avatar-1.jpg';
import './BriefInfoCard.css';

export default function BriefInfoCard() {
  const { pathname } = useLocation();
  const { currentUser } = useCurrentUser();
  const { plan } = usePlan();
  const { employeeId } = useParams();

  let avatar; let job; let name;

  switch (pathname) {
    case '/my-idp':
      avatar = currentUser.photo;
      job = currentUser.job_title;
      name = currentUser.fio;
      break;
    case `/employee-plan/${employeeId}`:
      avatar = plan?.employee.photo;
      job = plan?.employee.job_title;
      name = plan?.employee.fio;
      break;
    default:
      avatar = '';
      job = '';
      name = '';
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
