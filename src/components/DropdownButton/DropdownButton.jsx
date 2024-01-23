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

function DropdownButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const items = {
    text1: 'В работе',
    text2: 'Выполнен',
    text3: 'Не выполнен',
    text4: 'Отсутствует',
  };

  function onClick() {
    setIsOpen(!isOpen);
  }

  function onChange(evt) {
    setValue(evt.target.value);
  }

  function onClickItem(term) {
    setValue(term);
    setIsOpen(false);
  }

  return (
    <div className="dropdown-button-container">
      <input
        placeholder="–"
        value={value}
        onClick={onClick}
        onChange={onChange}
        className={`dropdown-button ${props.className}`}
      />
      <ul className={`dropdown-button__list ${isOpen ? 'active' : ''}`}>
        <li className="dropdown-button__item dropdown-button__item_blue" onClick={() => onClickItem(items.text1)}>
          {items.text1}
        </li>
        <li className="dropdown-button__item dropdown-button__item_green" onClick={() => onClickItem(items.text2)}>
          {items.text2}
        </li>
        <li className="dropdown-button__item dropdown-button__item_red" onClick={() => onClickItem(items.text3)}>
          {items.text3}
        </li>
        <li className="dropdown-button__item dropdown-button__item_grey" onClick={() => onClickItem(items.text4)}>
          {items.text4}
        </li>
      </ul>
    </div>
  );
}

export default DropdownButton;
