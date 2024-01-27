/* eslint-disable no-nested-ternary */
import React from 'react';
import './EmployeesCard.css';
import { useNavigate } from 'react-router-dom';

export default function EmployeesCard({ employee }) {
  const navigate = useNavigate();

  function openEmployeePlan() {
    if (employee.idp.status !== 'Отсутствует') {
      navigate('/employee-plan');
    }
  }

  let classNameTitleStatus;

  if (employee.idp[0].status === 'В работе') {
    classNameTitleStatus = 'employees-card__status-value employees-card__status-value_in-progress';
  } else if (employee.idp[0].status === 'Выполнен') {
    classNameTitleStatus = 'employees-card__status-value employees-card__status-value_done';
  } else if (employee.idp[0].status === 'Не выполнен') {
    classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-done';
  } else if (employee.idp[0].status === 'Отсутствует') {
    classNameTitleStatus = 'employees-card__status-value employees-card__status-value_not-exist';
  }

  return (
    <div onClick={openEmployeePlan} className={`employees-card ${(employee.idp[0].status === 'Отсутствует') ? 'employees-card_inactive' : ''}`}>
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
  );
}
