/*
import React from 'react';
import './GoalCard.css';

function GoalCard(card) {
  return (
    <div className="card">
      <p className="card__title">Цель: {card.title}</p>
      <div className="card__deadline">
        <p className="card__field-name">Дедлайн:</p>
        <p className="card__deadline__date">{card.deadline}</p>
      </div>
      <div className="card__status">
        <p className="card__field-name">Статус:</p>
        <p className="card__status__type">{card.status}</p>
      </div>
      <div className="card__description">
        <p className="card__field-name">Описание:</p>
        <p className="card__description-text">{card.description}</p>
      </div>
      <section className="card__list">
        <div className="card__list-header">
          <button className="card__list-button"></button>
          <p className="card__field-name">
            Задачи <span>{card.tasks.length}</span>
          </p>
        </div>
        <ol className="card__list-items">
          {card.tasks
            && card.tasks.map((item, index) => (
              <li className="card__list-item" key={index}>
                <p className="card__list-item-name">{item.name}</p>
              </li>
            ))}
        </ol>
      </section>
      <section className="card__list card__list-padding-none">
        <div className="card__list-header">
          <button className="card__list-button"></button>
          <p className="card__field-name">
            Комментарии <span>{card.comments.length}</span>
          </p>
        </div>
        <ul className="card__message-list">
          {card.comments
            && card.comments.map((item, index) => (
              <li className="card__message-item" key={index}>
                <img className="card__message-photo" src={item.avatar} />
                <div className="card__message-info">
                  <p className="card__message-name">{item.employeeName}</p>
                  <p className="card__message-text">{item.message}</p>
                </div>
              </li>
            ))}
        </ul>

        <section className="card__textarea">
          <textarea className="card__textarea-field" placeholder="Добавьте комментарий"></textarea>
          /* <button className="card__textarea-button"></button> */
/*
        </section>
      </section>
    </div>
  );
}
export default GoalCard; */
