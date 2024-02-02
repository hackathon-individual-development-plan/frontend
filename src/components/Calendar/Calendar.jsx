import React from 'react';
import { CalendarDesktop } from '@alfalab/core-components/calendar/desktop';

function Calendar() {
  const [value, setValue] = React.useState();
  const defaultDate = new Date('May 01, 2023 00:00:00');
  const events = [defaultDate.setDate(4), defaultDate.setDate(10), defaultDate.setDate(14)];

  const offDays = [
    defaultDate.setDate(1),
    defaultDate.setDate(8),
    defaultDate.setDate(15),
    defaultDate.setDate(22),
    defaultDate.setDate(29),
  ];

  const holidays = [
    defaultDate.setDate(6),
    defaultDate.setDate(7),
    defaultDate.setDate(13),
    defaultDate.setDate(14),
    defaultDate.setDate(20),
    defaultDate.setDate(21),
    defaultDate.setDate(27),
    defaultDate.setDate(28),
  ];

  const calendarStyles = {
    borderRadius: '8px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ width: '262px', marginTop: 'var(--gap-2xl)', ...calendarStyles }}>
      <CalendarDesktop
        defaultMonth={defaultDate.getTime()}
        value={value}
        onChange={setValue}
        responsive={true}
        selectorView="month-only"
        events={events}
        offDays={offDays}
        holidays={holidays}
        showCurrentYearSelector={true}
      />
    </div>
  );
}

export default Calendar;
