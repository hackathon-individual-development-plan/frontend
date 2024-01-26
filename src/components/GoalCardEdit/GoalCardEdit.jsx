/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './GoalCardEdit.css';
import { useFormContext } from 'react-hook-form';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import DateInput from '../DateInput/DateInput.jsx';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';
// import PickerStatusButton from '../DropdownButton/DropdownButton.jsx';

function GoalCardEdit({ card, uniqueId, cardIndex }) {
  const { register } = useFormContext();

  // plan provider
  const { deleteEmptyGoal } = usePlan();

  const [isActiveTasks, setActiveTasks] = useState(false);
  const [isActiveMessages, setActiveMessages] = useState(false);

  // TASKS SECTION
  // state for current goal tasks
  const [currentTasks, setCurrentTasks] = useState([]);
  useEffect(() => {
    setCurrentTasks(card?.tasks);
  }, card?.tasks);
  // state for new task value
  const [newTaskValue, setNewTaskValue] = useState('');
  const onAddNewTask = () => {
    // Проверка, чтобы избежать добавления пустого таска
    if (newTaskValue.trim() !== '') {
      // Создание нового таска
      const newTask = {
        text: newTaskValue.trim(),
      };

      // Обновление состояния с добавлением нового таска
      setCurrentTasks((prevTasks) => [...prevTasks, newTask]);

      // Очистка значения newTaskValue после добавления таска
      setNewTaskValue('');
    }
  };
  const onDeleteTask = (index) => {
    // Фильтрация массива задач для удаления задачи с указанным индексом
    setCurrentTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const onDelete = () => {
    deleteEmptyGoal(uniqueId);
  };

  const commentsSection = () => {
    if (!card || !card?.comments) return <></>;
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
      <div className="card__target">
        <div className="card__target-header">
          <p className="card__field-name">Цель:</p>
          <button type="button" className="card__trash" onClick={onDelete} />
        </div>
        <input
          type="text"
          className="card__input"
          defaultValue={card?.title}
          {...register(`goals.${cardIndex}.title`, {
            required: {
              value: false,
            },
          })}
        />
      </div>
      <section className="card__condition">
        <p className="card__field-name">Дедлайн:</p>
        <p className="card__field-name">Статус:</p>
        <DateInput deadlineData={card?.deadline} />
        {/* <PickerStatusButton /> */}
        <DropdownButton cardIndex={cardIndex} status={card?.status}/>
      </section>
      <section className="card__discription">
        <p className="card__field-name">Описание:</p>
        <input
          type="text"
          className="card__discription-input"
          defaultValue={card?.description}
          placeholder="Добавить комментарий"
          {...register(`goals.${cardIndex}.description`, {
            required: {
              value: false,
            },
          })}
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
        <div className={isActiveTasks ? 'card__list-edit-tasks card__list-edit-tasks_active' : 'card__list-edit-tasks'}>
          <ol className="card__list-edit-items">
            {currentTasks.map((item, index) => (
              <li className="card__list-edit-item" key={index}>
                <p className="card__list-edit-item-name">{item.text}</p>
                <button className="card__list-edit-item-delete" onClick={() => onDeleteTask(index)}></button>
                <input
                  type='hidden'
                  defaultValue={item.text}
                  {...register(`goals.${cardIndex}.tasks.${index}.text`)}
                />
              </li>
            ))}

          </ol>
          <div className="card__list-edit-add">
          <button onClick={() => onAddNewTask()} type="button" className="card__list-edit-add-button"></button>
            <input
              type="text"
              className="card__input card__input_white card__input_border-none"
              onChange={(e) => setNewTaskValue(e.target.value)}
              />
          </div>
        </div>
      </section>
      {commentsSection()}
    </div>
  );
}
export default GoalCardEdit;
