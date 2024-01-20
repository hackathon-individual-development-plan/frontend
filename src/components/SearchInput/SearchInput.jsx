/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import employees from '../../utils/employees';
import './SearchInput.css';

export default function SearchInput() {
  const [value, setValue] = useState('');

  function onChange(evt) {
    setValue(evt.target.value);
  }

  function onSearch(searchTerm) {
    setValue(searchTerm);
  }

  return (
    <div className='search'>
      <div className='search__container'>
        <input className='search__input' type='text' placeholder='Поиск по сотруднику' value={value} onChange={onChange} />
      </div>
      <div className='search__dropdown'>
        {employees.filter((item) => {
          const searchTerm = value.toLowerCase();
          const name = item.name.toLowerCase();

          return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
        })
          .slice(0, 10)
          .map((item) => (<div className='search__dropdown-row' onClick={() => onSearch(item.name)} key={item.id}>
            {item.name}
          </div>))}
      </div>
    </div>
  );
}
