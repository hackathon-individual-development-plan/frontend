import React, { useState } from 'react';
import './GoalCardEdit.css';
import { useForm } from 'react-hook-form';
import DateInput from '../DateInput/DateInput.jsx';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';

function GoalCardEdit({ card }) {
  const { register, handleSubmit } = useForm();
  const [isActiveTasks, setActiveTasks] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    alert('Сохранено');
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="card__form">
        <div className="card__target">
          <div className="card__target-header">
            <p className="card__field-name">Цель:</p>
            <img className="card__trash" src="/images/trash-icon.svg" alt="trash logo" />
          </div>
          <input
            {...(register('target'),
            {
              required: true,
            })}
            value={card?.title}
            className="card__input"
            type="text"
            name="input-target"
            placeholder="Название цели"
          />
        </div>
        <section className="card__condition">
          <p className="card__field-name">Дедлайн:</p>
          <p className="card__field-name">Статус:</p>
          <DateInput />
          <DropdownButton />
        </section>
        <section className="card__discription">
          <p className="card__field-name">Описание:</p>
          <input
            {...(register('description'),
            {
              required: true,
            })}
            value={card?.description}
            className="card__input card__input_white"
            type="text"
            name="input-target"
            placeholder="Добавить комментарий"
          />
        </section>
        <section className="card__list">
          <div className="card__list-header">
            <button type='button' onClick={() => setActiveTasks(!isActiveTasks)} className={isActiveTasks ? 'card__list-button card__list-button_active' : 'card__list-button'}></button>
            <p className="card__list-title">
              Задачи <span>{card?.tasks.length}</span>
            </p>
          </div>
          <div className={isActiveTasks ? 'card__list-tasks card__list-tasks_active' : 'card__list-tasks'}>
            <ol className='card__list-items'>
            {card?.tasks
          && card?.tasks.map((item, index) => (
                <li className="card__list-item" key={index}>
                  <p className="card__list-item-name">{item.name}</p>
                </li>
          ))
              }
          </ol>
            <div className="card__list-add">
              <button type='button' className="card__list-add-button"></button>
              <input
                {...(register('task'), {
                  required: true,
                })}
                className="card__input card__input_white card__input_border-none"
                type="text"
                name="input-target"
                placeholder="Добавить задачу"
              />
            </div>
          </div>
        </section>

        <section className="card__list card__list-padding-none">
          <div className="card__list-header">
            <button type="button" className="card__list-button"></button>
            <p className="card__list-title">
              Комментарии <span>{card?.comments.length}</span>
            </p>
          </div>
          <ul className="card__message-list">
          {card?.comments
          && card?.comments.map((item, index) => (
              <li className="card__message-item" key={index}>
                <img className="card__message-photo" src={item.avatar} />
                <div className="card__message-info">
                  <p className="card__message-name">{item.employeeName}</p>
                  <p className="card__message-text">{item.message}</p>
                </div>
              </li>
          ))}
        </ul>
        </section>
      </form>
    </div>
  );
}
export default GoalCardEdit;
