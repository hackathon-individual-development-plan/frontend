import React, { useState } from 'react';
import './GoalCardEdit.css';
import { useForm } from 'react-hook-form';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import DateInput from '../DateInput/DateInput.jsx';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';

function GoalCardEdit({ card, uniqueId }) {
  const { register, handleSubmit } = useForm();
  const { deleteEmptyGoal } = usePlan();
  const [isActiveTasks, setActiveTasks] = useState(false);
  const [isActiveMessages, setActiveMessages] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    alert('Сохранено');
  };

  const onDelete = () => {
    deleteEmptyGoal(uniqueId);
  };

  const commentsSection = () => {
    if (!card) return <></>;
    return (
      <section className="card__list-edit card__list-edit-padding-none">
        <div className="card__list-edit-header">
          <button
            type="button"
            onClick={() => setActiveMessages(!isActiveMessages)}
            className={
              isActiveMessages ? 'card__list-edit-button card__list-edit-button_active' : 'card__list-edit-button'
            }
          ></button>
          <p className="card__list-edit-title">
            Комментарии <span>{card?.comments.length}</span>
          </p>
        </div>
        <div
          className={
            isActiveMessages ? 'card__list-edit-messages card__list-edit-messages_active' : 'card__list-edit-messages'
          }
        >
          <ul className="card__message-edit-list">
            {card?.comments
              && card?.comments.map((item, index) => (
                <li className="card__message-edit-item" key={index}>
                  <img className="card__message-edit-photo" src={item.photo} />
                  <div className="card__message-edit-info">
                    <p className="card__message-edit-name">{item.fio}</p>
                    <p className="card__message-edit-text">{item.message}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    );
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="card__form">
        <div className="card__target">
          <div className="card__target-header">
            <p className="card__field-name">Цель:</p>
            <button type="button" className="card__trash" onClick={onDelete} />
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
          <DateInput deadlineData={card.deadline} />
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
            className="card__discription-input"
            type="text"
            name="input-target"
            placeholder="Добавить комментарий"
          />
        </section>
        <section className="card__list-edit">
          <div className="card__list-edit-header">
            <button
              type="button"
              onClick={() => setActiveTasks(!isActiveTasks)}
              className={
                isActiveTasks ? 'card__list-edit-button card__list-edit-button_active' : 'card__list-edit-button'
              }
            ></button>
            <p className="card__list-edit-title">
              Задачи <span>{card?.tasks.length}</span>
            </p>
          </div>
          <div
            className={isActiveTasks ? 'card__list-edit-tasks card__list-edit-tasks_active' : 'card__list-edit-tasks'}
          >
            <ol className="card__list-edit-items">
              {card?.tasks
                && card?.tasks.map((item, index) => (
                  <li className="card__list-edit-item" key={index}>
                    <p className="card__list-edit-item-name">{item.text}</p>
                    <button className='card__list-edit-item-delete'></button>
                  </li>
                ))}
            </ol>
            <div className="card__list-edit-add">
              <button type="button" className="card__list-edit-add-button"></button>
              <input
                {...(register('task'),
                {
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
        {commentsSection()}
      </form>
    </div>
  );
}
export default GoalCardEdit;
