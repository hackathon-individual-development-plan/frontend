import React, { useEffect, useState } from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './GoalCard.css';

function GoalCard({ cardIndex }) {
  const {
    plan,
  } = usePlan();
  const [isActiveTasks, setActiveTasks] = useState(false);
  const [isActiveMessages, setActiveMessages] = useState(false);
  const card = plan.goals[cardIndex];

  // COMMENTS SECTION
  // state for current goal messages
  const [currentComments, setCurrentComments] = useState([]);
  useEffect(() => {
    setCurrentComments(card?.comments);
  }, card?.comments);
  // state for new comment value
  const [newCommentValue, setNewCommentValue] = useState('');
  const onAddNewComment = () => {
    // Проверка, чтобы избежать добавления пустого комментария
    if (newCommentValue.trim() !== '') {
      // Создание нового комментария
      const newComment = {
        message: newCommentValue.trim(),
      };

      // Обновление состояния с добавлением нового комментария
      setCurrentComments((prevComments) => [...prevComments, newComment]);

      // Очистка значения newCommentValue после добавления комментария
      setNewCommentValue('');
    }
  };
  return (
    <div className="card">
      <p className="card__title">Цель: {card.title}</p>
      <div className="card__deadline">
        <p className="card__subtitle">Дедлайн:</p>
        <p className="card__deadline__date">{card.deadline}</p>
      </div>
      <div className="card__status">
        <p className="card__subtitle">Статус:</p>
        <p className={`card__status__type ${card.status === 'В работе' ? 'blue' : ''} ${card.status === 'Выполнен' ? 'green' : ''} ${card.status === 'Не выполнен' ? 'red' : ''} ${card.status === 'Отсутствует' ? 'grey' : ''} `}>{card.status}</p>
      </div>
      <div className="card__description">
        <p className="card__subtitle">Описание:</p>
        <p className="card__description-text">{card.description}</p>
      </div>
      <section className="card__list">
        <div className="card__list-header">
          <button type="button"
            onClick={() => setActiveTasks(!isActiveTasks)}
            className={
              isActiveTasks ? 'card__list-button card__list-button_active' : 'card__list-button'}></button>
          <p className="card__subtitle">
            Задачи <span>{card?.tasks?.length}</span>
          </p>
        </div>
        <div className={isActiveTasks ? 'card__list-tasks card__list-tasks_active' : 'card__list-tasks'}>
          <ol className="card__list-items">
            {card.tasks
              && card.tasks.map((item, index) => (
                <li className="card__list-item" key={index}>
                  <p className="card__list-item-name">{item.text}</p>
                </li>
              ))}
          </ol>
        </div>
      </section>
      <section className="card__list card__list-padding-none">
        <div className="card__list-header">
          <button type="button"
            onClick={() => setActiveMessages(!isActiveMessages)}
            className={
              isActiveMessages ? 'card__list-button card__list-button_active' : 'card__list-button'}></button>
          <p className="card__subtitle">
            Комментарии <span>{card?.comments?.length}</span>
          </p>
        </div>
        <div
          className={
            isActiveMessages ? 'card__list-messages card__list-messages_active' : 'card__list-messages'
          }
        >
          <ul className="card__message-list">
            {currentComments?.map((item, index) => (
              <li className="card__message-item" key={index}>
                <img className="card__message-photo" src={item.photo} />
                <div className="card__message-info">
                  <p className="card__message-name">{item.fio}</p>
                  <p className="card__message-text">{item.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <section className="card__textarea">
          <input type='text' onChange={(e) => setNewCommentValue(e.target.value)} className="card__textarea-field" placeholder="Добавьте комментарий"></input>
          <button type='button' onClick={() => onAddNewComment()} className="card__textarea-button"></button>
        </section>
      </section>
    </div>
  );
}
export default GoalCard;
