import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './DateInput.css';

const DateInput = ({ deadlineData, cardIndex }) => {
  // Состояние для хранения значения даты
  const [selectedDate, setSelectedDate] = useState(deadlineData);

  // USEFORM HOOK
  const { register } = useFormContext();

  // Обработчик изменения значения в поле ввода
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <input
        className="date-input"
        type="date"
        id="dateInput"
        onChange={handleDateChange}
        defaultValue={selectedDate}
        {...register(`goals.${cardIndex}.deadline`, {
          required: {
            value: true,
            message: 'Поле обязательное для заполнения',
          },
        })}
      />
    </div>
  );
};

export default DateInput;
