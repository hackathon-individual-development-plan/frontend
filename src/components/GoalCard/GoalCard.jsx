import React, { useEffect, useRef, useState } from 'react';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './GoalCard.css';
import { createComments } from '../../utils/api';

function GoalCard({ cardIndex }) {
  const {
    plan,
  } = usePlan();
  const [count, setCount] = useState('');
  const [isActiveTasks, setActiveTasks] = useState(false);
  const [isActiveMessages, setActiveMessages] = useState(false);
  const card = plan.goals[cardIndex];
  const newCommentRef = useRef();

  // COMMENTS SECTION
  // state for current goal messages
  const [currentComments, setCurrentComments] = useState([]);
  const [newCommentValue, setNewCommentValue] = useState('');
  console.log('currentComments', currentComments);

  // в этом коде ошибка 404 goal_id = undefined
  useEffect(() => {
    setCurrentComments(card?.comments);
  }, [card, card?.comments]);
  const onAddNewComment = (data, goal_id) => {
    createComments(data, goal_id)
      .then((comment) => {
        const newComment = {
          id: comment.id,
          user: {
            id: comment.user.id,
            fio: comment.user.fio,
            photo: comment.user.photo,
          },
          // eslint-disable-next-line camelcase
          comment_text: newCommentValue,
        };
        setCurrentComments((prevComments) => [...prevComments, newComment]);
      });
  };

  /* в этом коде ошибка 500 goal_id = id цели и выводится номером
  useEffect(() => {
    setCurrentComments(card?.comments);
  }, [card, card?.comments]);
  const goalID = card.id;
  const onAddNewComment = (data) => {
    createComments(data, goalID)
      .then((comment) => {
        const newComment = {
          id: comment.id,
          user: {
            id: comment.user.id,
            fio: comment.user.fio,
            photo: comment.user.photo,
          },
          // eslint-disable-next-line camelcase
          comment_text: newCommentValue,
        };
        setCurrentComments((prevComments) => [...prevComments, newComment]);
      });
  }; */

  /* в этом коде комментарии добавляются, но по 2-3 штуки и выплывает ошибка 404
const onAddNewComment = (data, goal_id) => {
  currentComments.filter((comment) => {
    const newComment = {
      id: comment.id,
      user: {
        id: comment.user.id,
        fio: comment.user.fio,
        photo: comment.user.photo,
      },
      // eslint-disable-next-line camelcase
      comment_text: newCommentValue,
    };
    createComments(data, goal_id)
      .then(() => {
        setNewCommentValue('');
        setCurrentComments(data);
      });
    return setCurrentComments((prevComments) => [...prevComments, newComment]);
  });
}; */

  function handleTextChange(e) {
    setNewCommentValue(e.target.value);
    setCount(e.target.value);
  }
  return (
    <div className="card">
      <p className="card__title">Цель: {card.title}</p>
      <div className="card__deadline">
        <p className="card__subtitle">Дедлайн:</p>
        {/* <p className="card__deadline__date">
        {(new Date(card.deadline)).toLocaleDateString()}</p> */}
        <p className="card__deadline__date">{(new Date(card.deadline)).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' }).split('/').join('/')}</p>

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
            {currentComments.map((item, index) => (
              <li className="card__message-item" key={index}>
                <img className="card__message-photo" src={item.user.photo} />
                <div className="card__message-info">
                  <p className="card__message-name">{item.user.fio}</p>
                  <p className="card__message-text">{item.comment_text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <section className="card__textarea">
          <input ref={newCommentRef} value={count} onChange={handleTextChange} maxLength='400' type='text' className="card__textarea-field" placeholder="Добавьте комментарий"></input>
          <p className='card__counter'>{count.length}/400</p>
          <ButtonDesktop className="card__textarea-button" onClick={() => onAddNewComment()} size='xxs' shape='rectangular' view='primary'>
            Отправить
          </ButtonDesktop>
        </section>
      </section>
    </div>
  );
}
export default GoalCard;
