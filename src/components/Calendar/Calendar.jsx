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
    border: '1px solid rgba(233, 233, 235, 1)',
    borderRadius: '8px',
    boxSizing: 'border-box',
    boxShadow: `0px 20px 24px rgba(0, 0, 0, 0.08),
                        0px 12px 16px rgba(0, 0, 0, 0.04),
                        0px 4px 8px rgba(0, 0, 0, 0.04),
                        0px 0px 1px rgba(0, 0, 0, 0.04)`,
  };

  return (
    <div style={{ width: '320px', marginTop: 'var(--gap-2xl)', ...calendarStyles }}>
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
