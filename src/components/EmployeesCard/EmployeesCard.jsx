import React from 'react';
import './EmployeesCard.css';

export default function EmployeesCard({ employee }) {
  return (
    <div className='employees-card'>
      <ul className='employees-card__list'>
        <li className='employees-card__element'>
          <p className='employees-card__title'>Сотрудник:<span className='employees-card__value'>{employee.name}</span></p>
        </li>
        <li className='employees-card__element'>
          <p className='employees-card__title'>Должность:<span className='employees-card__value'>{employee.position}</span></p>
        </li>
        <li className='employees-card__element'>
          <p className='employees-card__title'>Название ИПР:<span className='employees-card__value'>{employee.IPDName}</span></p>
        </li>
        <li className='employees-card__element'>
          <p className='employees-card__title'>Статус:<span className='employees-card__value employees-card__status-value employees-card__status-value_in-progress'>{employee.status}</span></p>      </li>
      </ul>
      <img className='employees-card__avatar' src={employee.avatar} alt={employee.name} />
    </div>
  );
}
