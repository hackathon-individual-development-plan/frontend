/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import './GoalCardEdit.css';
import '../MessageError/MessageError.css';
import { useFormContext } from 'react-hook-form';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import DateInput from '../DateInput/DateInput.jsx';
import GoalSelectStatusButton from '../GoalSelectStatusButton/GoalSelectStatusButton.jsx';

function GoalCardEdit({ cardId, cardIndex }) {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  // PLAN PROVIDER
  const { plan, collectDeleteModeGoals } = usePlan();
  const card = plan.goals[cardIndex];

  // Добавлено новое состояние isDeleted
  const [isDeleted, setIsDeleted] = useState(false);
  // delete goal
  const onDeleteGoal = () => {
    setIsDeleted(true);
    collectDeleteModeGoals(cardIndex);
  };

  const [isActiveTasks, setActiveTasks] = useState(false);
  const [isActiveMessages, setActiveMessages] = useState(false);

  // TASKS SECTION
  // state for current goal tasks
  const [currentTasks, setCurrentTasks] = useState([]);
  useEffect(() => {
    setCurrentTasks(card?.tasks);
  }, [card, card?.tasks]);
  // state for new task value
  const [newTaskValue, setNewTaskValue] = useState('');
  const newTaskRef = useRef();
  const onAddNewTask = () => {
    // Проверка, чтобы избежать добавления пустого таска
    if (newTaskValue.trim() !== '') {
      // Создание нового таска
      const newTask = {
        text: newTaskValue.trim(),
      };
      // Обновление состояния с добавлением нового таска
      setCurrentTasks((prevTasks) => [...prevTasks, newTask]);
    }
    newTaskRef.current.value = null;
  };
  const onDeleteTask = (event, index) => {
    event.preventDefault();
    // Фильтрация массива задач для удаления задачи с указанным индексом
    setCurrentTasks(currentTasks.filter((task, i) => i !== index));
  };

  return (
    <div className={`card ${isDeleted ? 'card_deleted' : ''}`} key={cardId} >
      <div className="card__target" key={`${cardId}_cardtarget`}>
        <div className="card__target-header">
          <p className="card__field-name">Цель:</p>
          <button type="button" className="card__trash" onClick={onDeleteGoal} />
        </div>
        <input
          key={`${cardId}goals.id`}
          type='hidden'
          value={card.id}
          {...register(`goals.${cardIndex}.id`)}
        ></input>
        <input
          type='hidden'
          value={card.isNew}
          {...register(`goals.${cardIndex}.isNew`)}
        ></input>
        <input
          key={`${cardId}_goals.title`}
          type="text"
          className="card__input"
          defaultValue={card?.title}
          {...register(`goals.${cardIndex}.title`, {
            required: {
              value: true,
              message: 'Поле обязательное для заполнения',
            },
            minLength: {
              value: 1,
              message: 'Минимальная длина 1 символ',
            },
            maxLength: {
              value: 30,
              message: 'Максимальная длина 30 символов',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-Я0-9\s!@#$%^&*()№_+-{}[\]:;<>,.?~\\/=%&/()=?+!@"§$]+$/,
              message: 'Пожалуйста введите валидные значения',
            },
          })}
        />
        {errors?.goals?.[cardIndex]?.title && (
          <div className="message__error">{errors.goals[cardIndex].title.message}</div>
        )}
      </div>
      <section className="card__condition">
        <p className="card__field-name">Дедлайн:</p>
        <p className="card__field-name">Статус:</p>
        <DateInput deadlineData={card?.deadline} cardIndex={cardIndex} />
        <GoalSelectStatusButton status={card?.status} cardIndex={cardIndex} />
      </section>
      <section className="card__discription">
        <p className="card__field-name">Описание:</p>
        <textarea
          type="text"
          rows='15'
          className="card__discription-input"
          defaultValue={card?.description}
          placeholder="Добавить комментарий"
          {...register(`goals.${cardIndex}.description`, {
            required: {
              value: true,
              message: 'Поле обязательное для заполнения',
            },
            minLength: {
              value: 1,
              message: 'Минимальная длина 1 символ',
            },
            maxLength: {
              value: 100,
              message: 'Максимальная длина 100 символов',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-Я0-9\s!@#$%^&*()№_+-{}[\]:;<>,.?~\\/=%&/()=?+!@"§$]+$/,
              message: 'Пожалуйста введите валидные значения',
            },
          })}
        />
        {errors?.goals?.[cardIndex]?.description && (
          <div className="message__error">{errors.goals[cardIndex].description.message}</div>
        )}
      </section>
      <section className="card__list-edit">
        <div className="card__list-edit-header">
          <button
            type="button"
            onClick={() => setActiveTasks(!isActiveTasks)}
            className={
              isActiveTasks ? 'card__list-edit-button' : 'card__list-edit-button card__list-edit-button_active'
            }
          ></button>
          <p className="card__list-edit-title">
            Задачи <span>{card?.tasks?.length}</span>
          </p>
        </div>
        <div className={isActiveTasks ? 'card__list-edit-tasks' : 'card__list-edit-tasks card__list-edit-tasks_active'}>
          <ol className="card__list-edit-items">
            {currentTasks?.map((item, index) => (
              <li className="card__list-edit-item" key={index}>
                <p className="card__list-edit-item-name">{item.text}</p>
                <button className="card__list-edit-item-delete" onClick={(event) => onDeleteTask(event, index)}></button>
                <input type="hidden" defaultValue={item.text} {...register(`goals.${cardIndex}.tasks.${index}.text`)} />
              </li>
            ))}
          </ol>
          <div className="card__list-edit-add">
            <button onClick={() => onAddNewTask()} type="button" className="card__list-edit-add-button"></button>
            <input
              type="text"
              minLength="1"
              maxLength="30"
              className="card__input card__input_white card__input_border-none"
              onChange={(e) => setNewTaskValue(e.target.value)}
              ref={newTaskRef}
            />
          </div>
        </div>
      </section>
      {!card || !card?.comments ? (
        <></>
      ) : (
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
              Комментарии <span>{card?.comments?.length}</span>
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
                    <img className="card__message-edit-photo" src={item.user.photo} alt='аватар' />
                    <div className="card__message-edit-info">
                      <p className="card__message-edit-name">{item.user.fio}<span className='card__message-date'>{new Date(item.created_at).toLocaleString('ru-RU', {
                        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
                      })}</span></p>
                      <p className="card__message-edit-text">{item.comment_text}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
export default GoalCardEdit;
