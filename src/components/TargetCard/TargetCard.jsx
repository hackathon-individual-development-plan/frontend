import React from 'react';
import './TargetCard.css';
import DateInput from '../DateInput/DateInput.jsx';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';

function TargetCard(card) {
  return (
    <div className="card">
      <form className="card__form">
        <div className="card__target">
          <div className="card__target-header">
            <p className="card__field-name">{card.title}</p>
            <img className="card__trash" src="/images/trash-icon.svg" alt="trash logo" />
          </div>
          <input className="card__input" type="text" name="input-target" placeholder="Название цели" />
        </div>
        <section className="card__condition">
          <p className="card__field-name"></p>
          <p className="card__field-name"></p>
          <DateInput deadline={card.deadline} />
          <DropdownButton status={card.status} />
        </section>
        <section className="card__discription">
          <p className="card__field-name"></p>
          <input
            className="card__input card__input_white"
            type="text"
            name="input-target"
            placeholder="Добавить комментарий"
          />
        </section>
        <section className="card__list">
          <div className="card__list-header">
            <button className="card__list-button"></button>
            <p className="card__list-title">
              Задачи <span>2</span>
            </p>
          </div>
          <ol className="card__list-items">
            <li className="card__list-item">
              <p className="card__list-item-name"></p>
            </li>
            <li className="card__list-item">
              <p className="card__list-item-name"></p>
            </li>
          </ol>
          <div className="card__list-add">
            <button className="card__list-add-button"></button>
            <input
              className="card__input card__input_white card__input_border-none"
              type="text"
              name="input-target"
              placeholder="Добавить задачу"
            />
          </div>
        </section>
        {/* <section className="card__list card__list-padding-none">
          <div className="card__list-header">
            <button className="card__list-button"></button>
            <p className="card__list-title">
              Комментарии <span>1</span>
            </p>
          </div>
          <ul className="card__message-list">
            <li className="card__message-item">
              <img className="card__message-photo" src="/images/photo-xs.svg" />
              <div className="card__message-info">
                <p className="card__message-name">Артемьев Олег Иванович</p>
                <p className="card__message-text">Начал проходить тренинг</p>
              </div>
            </li>
          </ul>
          <section className="card__textarea">
            <textarea className="card__textarea-field"
            placeholder="Добавьте комментарий"></textarea>
            <button className="card__textarea-button"></button>
          </section>
        </section> */}
      </form>
    </div>
  );
}
export default TargetCard;
