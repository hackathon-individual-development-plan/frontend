import React from 'react';
import './TargetCard.css';
import { useForm } from 'react-hook-form';
import DateInput from '../DateInput/DateInput.jsx';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';

function TargetCard({ cardTarget }) {
  const { register, handleSubmit } = useForm();
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
            value={cardTarget.target}
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
            value={cardTarget.description}
            className="card__input card__input_white"
            type="text"
            name="input-target"
            placeholder="Добавить комментарий"
          />
        </section>
        <section className="card__list">
          <div className="card__list-header">
            <button type="button" className="card__list-button"></button>
            <p className="card__list-title">
              Задачи <span>{cardTarget.tasks.length}</span>
            </p>
          </div>
          <ol className="card__list-items">
            {cardTarget.tasks.map((item) => (
              <li key={item.id} className="card__list-item">
                <p className="card__list-item-name">{item.task}</p>
              </li>
            ))}
          </ol>
          <div className="card__list-add">
            <button type="button" className="card__list-add-button"></button>
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
        </section>

        <section className="card__list card__list-padding-none">
          <div className="card__list-header">
            <button type="button" className="card__list-button"></button>
            <p className="card__list-title">
              Комментарии <span>{cardTarget.comments.length}</span>
            </p>
          </div>
          <ul className="card__message-list">
            {cardTarget.comments.map((item) => (
              <li key={item.id} className="card__message-item">
                <img className="card__message-photo" src={item.avatar} />
                <div className="card__message-info">
                  <p className="card__message-name">{item.name}</p>
                  <p className="card__message-text">{item.comment}</p>
                </div>
              </li>
            ))}
          </ul>

          <section className="card__textarea">
            <textarea className="card__textarea-field" placeholder="Добавьте комментарий"></textarea>
            {/* <button className="card__textarea-button"></button> */}
          </section>
        </section>
      </form>
    </div>
  );
}
export default TargetCard;
