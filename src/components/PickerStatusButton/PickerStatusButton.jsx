import React from 'react';
import { Select } from '@alfalab/core-components/select';

function PickerStatusButton() {
  const OPTIONS = [
    { key: '1', content: '-' },
    { key: '2', content: 'В работе' },
    { key: '3', content: 'Выполнен' },
    { key: '4', content: 'Не выполнен' },
    { key: '5', content: 'Отсутствует' },
  ];

  return (
    <div style={{ width: 194 }}>
      <Select
        allowUnselect={true}
        block={true}
        size="s"
        options={OPTIONS}
      />
    </div>
  );
}

export default PickerStatusButton;
