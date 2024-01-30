import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './DateInput.css';

const DateInput = ({ deadlineData, cardIndex }) => {
  const dateObject = new Date(deadlineData);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObject.getDate().toString().padStart(2, '0');
  const formattedDeadline = `${year}-${month}-${day}`;

  const [selectedDate, setSelectedDate] = useState(formattedDeadline);

  // USEFORM HOOK
  const { register } = useFormContext();

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
