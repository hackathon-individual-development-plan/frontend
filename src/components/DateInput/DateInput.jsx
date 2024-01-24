import React from 'react';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { Calendar } from '@alfalab/core-components/calendar';

function DateInput({ deadlineData }) {
  const [value, setValue] = React.useState(deadlineData);
  // eslint-disable-next-line no-shadow
  const handleChange = (_, { value }) => {
    setValue(value);
  };
  return (
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
    />
  );
}

export default DateInput;
