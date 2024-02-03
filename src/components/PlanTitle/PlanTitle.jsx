import React from 'react';
import { useFormContext } from 'react-hook-form';
import PageTitle from '../PageTitle/PageTitle.jsx';
import './PlanTitle.css';
import '../MessageError/MessageError.css';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';

// eslint-disable-next-line no-unused-vars
export default function PlanTitle() {
  const { isEditMode, toggleEditMode, plan } = usePlan();
  const { isSenior } = useCurrentUser();

  function handlEditClick() {
    toggleEditMode();
  }

  const toogleTitleType = () => {
    // FORM
    const {
      register,
      formState: { errors },
    } = useFormContext();

    if (!isEditMode) {
      return <h1 className="headline-plan__title">{plan?.title}</h1>;
    }
    return (
      <div>
        <input
          type="text"
          className="headline-plan__title-edit"
          defaultValue={plan?.title}
          {...register('title', {
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
              value: /^[a-zA-Zа-яА-Я0-9\s!@#$%^&*()№_+{}[\]:;<>,.?~\\/=%&/()=?+!@"§$]+$/,
              message: 'Пожалуйста введите валидные значения',
            },
          })}
        />
        {errors?.title && <div className="message__error">{errors.title.message}</div>}
      </div>
    );
  };

  return (
    <>
      <PageTitle
        content={
          <div className="headline-plan__container">
            {toogleTitleType()}
            {!isEditMode && isSenior ? <a className="headline-plan__edit" onClick={handlEditClick}></a> : null}
          </div>
        }
      />
    </>
  );
}
