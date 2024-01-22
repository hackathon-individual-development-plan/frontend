// import React from 'react';
// import { Select } from '@alfalab/core-components/select';

// function PickerStatusButton() {
//   const OPTIONS = [
//     { key: '1', content: '-' },
//     { key: '2', content: 'В работе' },
//     { key: '3', content: 'Выполнен' },
//     { key: '4', content: 'Не выполнен' },
//     { key: '5', content: 'Отсутствует' },
//   ];

//   return (
//     <div style={{ width: 194 }}>
//       <Select
//         allowUnselect={true}
//         block={true}
//         size="s"
//         options={OPTIONS}
//       />
//     </div>
//   );
// }

// export default PickerStatusButton;

// PickerStatusButton.js

import React, { useState } from 'react';
import './DropdownButton.css';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
      {' '}
      -
      <ul className={`dropdown-button__list ${isOpen ? 'active' : ''}`}>
        <li className="dropdown-button__item dropdown-button__item_blue">В работе</li>
        <li className="dropdown-button__item dropdown-button__item_green">Выполнен</li>
        <li className="dropdown-button__item dropdown-button__item_red">Не выполнен</li>
        <li className="dropdown-button__item dropdown-button__item_grey">Отсутствует</li>
      </ul>
    </nav>
  );
}

export default DropdownButton;
