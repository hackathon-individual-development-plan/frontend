import React from 'react';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { Calendar } from '@alfalab/core-components/calendar';

function DateInput() {
  const [deadLineValue, setDeadlineValue] = React.useState();

  return (
    <UniversalDateInput
      block={true}
      view="date"
      placeholder="ДД.ММ.ГГГГ"
      size="s"
      value={deadLineValue}
      // onChange={handleChange}
      disableUserInput={false}
      picker={true}
      Calendar={Calendar}
      calendarProps={{
        selectorView: 'month-only',
      }}
      clear={true}
      onClear={(e) => {
        e.stopPropagation();
        setDeadlineValue('');
      }}
    />
  );
}

export default DateInput;
