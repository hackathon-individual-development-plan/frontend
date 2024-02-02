/* eslint-disable max-len */
// /* eslint-disable no-nested-ternary */
// import React from 'react';
// import './EmployeesCard.css';
// import { useNavigate } from 'react-router-dom';

// export default function EmployeesCard({ employee, onCardClick }) {
//   const navigate = useNavigate();

//   function openEmployeePlan() {
//     onCardClick(employee.idp[0].id);
//     if (employee.idp[0].status !== 'Empty') {
//       navigate('/employee-plan');
//     }
//   }

//   let classNameTitleStatus; let text;

//   switch (employee.idp[0].status) {
//     case 'In progress':
//       classNameTitleStatus = 'employees-card__status-value employees-card__status-value_in-progress';
//       text = 'В работе';
//       break;
//     case 'Work done':
//       classNameTitleStatus = 'employees-card__status-value employees-card__status-value_done';
//       text = 'Выполнен';
//       break;
//     case 'Not done':
//       classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-done';
//       text = 'Не выполнен';
//       break;
//     default:
//       classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-exist';
//       text = 'Отсутствует';
//       break;
//   }

//   return (
//     <div onClick={openEmployeePlan} className={`employees-card ${(employee.idp[0].status === 'Empty') ? 'employees-card_inactive' : ''}`}>
//       <ul className='employees-card__list'>
//         <li className='employees-card__element'>
//           <p className='employees-card__title'>Сотрудник:<span className='employees-card__value'>{employee.employee.fio}</span></p>
//         </li>
//         <li className='employees-card__element'>
//           <p className='employees-card__title'>Должность:<span className='employees-card__value'>{employee.employee.job_title}</span></p>
//         </li>
//         <li className='employees-card__element'>
//           <p className='employees-card__title'>Название ИПР:<span className='employees-card__value'>{employee.idp[0].title}</span></p>
//         </li>
//         <li className='employees-card__element'>
//           <p className='employees-card__title'>Статус:<span className={classNameTitleStatus}>{text}</span></p>
//         </li>
//       </ul>
//       <img className='employees-card__avatar' src={employee.employee.photo} alt={employee.employee.fio} />
//     </div>
//   );
// }

/* eslint-disable no-nested-ternary */
import React from 'react';
import './EmployeesCard.css';
import { Link } from 'react-router-dom';
import { IPD_STATUS } from '../../utils/constants';
// import { useNavigate } from 'react-router-dom';

export default function EmployeesCard({ employee }) {
  // const navigate = useNavigate();

  // function openEmployeePlan() {
  //   onCardClick(employee.idp[0].id);
  //   if (employee.idp[0].status !== 'Empty') {
  //     navigate('/employee-plan');
  //   }
  // }

  function onClick(evt) {
    if (employee.idp[0].status === IPD_STATUS.EMPTY) {
      evt.preventDefault();
    }
  }

  let classNameTitleStatus;

  switch (employee.idp[0].status) {
    case IPD_STATUS.IN_PROGRESS:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_in-progress';
      break;
    case IPD_STATUS.DONE:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_done';
      break;
    case IPD_STATUS.NOT_DONE:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-done';
      break;
    case IPD_STATUS.CANCELED:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_canceled';
      break;
    default:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-exist';
      break;
  }

  return (
    <Link className='employees-card__link' to={`/employee-plan/${employee.idp[0].id}`} onClick={(evt) => onClick(evt)}>
      <div className={`employees-card ${(employee.idp[0].status === IPD_STATUS.EMPTY) ? 'employees-card_inactive' : ''}`}>
        <ul className='employees-card__list'>
          <li className='employees-card__element'>
            <p className='employees-card__title'>Сотрудник:<span className='employees-card__value'>{employee.employee.fio}</span></p>
          </li>
          <li className='employees-card__element'>
            <p className='employees-card__title'>Должность:<span className='employees-card__value'>{employee.employee.job_title}</span></p>
          </li>
          <li className='employees-card__element'>
            <p className='employees-card__title'>Название ИПР:<span className='employees-card__value'>{employee.idp[0].title}</span></p>
          </li>
          <li className='employees-card__element'>
            <p className='employees-card__title'>Статус:<span className={classNameTitleStatus}>{employee.idp[0].status}</span></p>
          </li>
        </ul>
        <img className='employees-card__avatar' src={employee.employee.photo} alt={employee.employee.fio} />
      </div>
    </Link>
  );
}
