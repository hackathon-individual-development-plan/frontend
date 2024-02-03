import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import './DropdownButton.css';

// eslint-disable-next-line no-unused-vars
function DropdownButton({ cardIndex, status }) {
  const options = {
    'In progress': 'В работе',
    'Work done': 'Выполнен',
    'Not done': 'Не выполнен',
    Empty: 'Отсутствует',
  };
  const [isOpen, setIsOpen] = useState(false);
  const [valueLabelStatus, setValueLabelStatus] = useState('Отсутствует');
  const [valueCodeStatus, setValueCodeStatus] = useState('Empty');

  useEffect(() => {
    setValueCodeStatus(status);
    setValueLabelStatus(options[status]);
  }, [status]);

  function onClick() {
    setIsOpen(!isOpen);
  }

  // eslint-disable-next-line no-unused-vars
  function onClickItem(code, label) {
    setValueCodeStatus(code);
    setValueLabelStatus(label);
    setIsOpen(false);
  }

  return (
    <div className="dropdown-button-container">
      <input
        type='hidden'
        value={valueCodeStatus}
      />
      <input
        placeholder="–"
        onClick={onClick}
        value={valueLabelStatus}
        className={'dropdown-button'}
      />
      <ul className={`dropdown-button__list ${isOpen ? 'active' : ''}`}>
        <li className="dropdown-button__item dropdown-button__item_blue"
          onClick={() => onClickItem('In progress', options['In progress'])}>
          {options['In progress']}
        </li>
        <li className="dropdown-button__item dropdown-button__item_green"
          onClick={() => onClickItem('Work done', options['Work done'])}>
          {options['Work done']}
        </li>
        <li className="dropdown-button__item dropdown-button__item_red"
          onClick={() => onClickItem('Not done', options['Not done'])}>
          {options['Not done']}
        </li>
        <li className="dropdown-button__item dropdown-button__item_grey"
          onClick={() => onClickItem('Empty', options.Empty)}>
          {options.Empty}
        </li>
      </ul>
    </div>
  );
}

export default DropdownButton;
