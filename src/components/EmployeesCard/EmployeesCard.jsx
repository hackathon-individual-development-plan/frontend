/* eslint-disable no-nested-ternary */
import React from 'react';
import './EmployeesCard.css';
import { useNavigate } from 'react-router-dom';

export default function EmployeesCard({ employee, onCardClick }) {
  const navigate = useNavigate();

  function openEmployeePlan() {
    onCardClick(employee.employee.id);
    console.log(employee.employee.id);
    if (employee.idp[0].status !== 'Отсутствует') {
      navigate('/employee-plan');
    }
  }

  let classNameTitleStatus; let text;

  switch (employee.idp[0].status) {
    case 'In progress':
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_in-progress';
      text = 'В работе';
      break;
    case 'Done':
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_done';
      text = 'Выполнен';
      break;
    case 'Not done':
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-done';
      text = 'Не выполнен';
      break;
    default:
      classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-exist';
      text = 'Отсутствует';
      break;
  }

  return (
    <div onClick={openEmployeePlan} className={`employees-card ${(!employee.idp[0].status) ? 'employees-card_inactive' : ''}`}>
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
          <p className='employees-card__title'>Статус:<span className={classNameTitleStatus}>{text}</span></p>
        </li>
      </ul>
      <img className='employees-card__avatar' src={employee.employee.photo} alt={employee.employee.fio} />
    </div>
  );
}
