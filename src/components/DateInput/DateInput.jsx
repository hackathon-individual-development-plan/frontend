/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { Calendar } from '@alfalab/core-components/calendar';
import { useFormContext } from 'react-hook-form';

function DateInput({ deadlineData, cardIndex }) {
  const [value, setValue] = useState(deadlineData);

  // USEFORM HOOK
  const { register } = useFormContext();

  // eslint-disable-next-line no-shadow
  const handleChange = (_, { value }) => {
    setValue(value);
  };
  return (
    <div>
    <UniversalDateInput
      block={true}
      view="date"
      placeholder="ДД.ММ.ГГГГ"
      size="s"
      value={value}
      onChange={handleChange}
      disableUserInput={false}
      picker={true}
      Calendar={Calendar}
      calendarProps={{
        selectorView: 'month-only',
      }}
      clear={true}
      onClear={(e) => {
        e.stopPropagation();
        setValue('');
      }}
      // {...register(`goals.${cardIndex}.deadline`)}
      />
      <input
      type='hidden'
      value={value}
      {...register(`goals.${cardIndex}.deadline`)}
    />
    </div>
  );
}

export default DateInput;
