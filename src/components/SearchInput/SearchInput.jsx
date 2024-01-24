import React, { useState } from 'react';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import './SearchInput.css';

export default function SearchInput() {
  const {
    employeesList, setFilteredEmployeesList, setSearchTerm, searchTerm, filterEmployees,
  } = usePlan();
  const [value, setValue] = useState('');

  function onChange(evt) {
    setValue(evt.target.value);
  }

  function onSearch(searchTermInput) {
    setValue(searchTermInput);
    setSearchTerm(searchTermInput);
    filterEmployees(searchTerm);
    console.log(searchTerm);
  }

  function onClick() {
    setValue('');
    setFilteredEmployeesList(employeesList);
  }

  return (
    <>
      <div className='search'>
        <div className='search__container'>
          <input className='search__input' type='text' placeholder='Поиск по сотруднику' value={value} onClick={onClick} onChange={onChange} />
        </div>
        <div className='search__dropdown'>
          {employeesList.filter((item) => {
            const searchTermInput = value.toLowerCase();
            const name = item.name.toLowerCase();
            return searchTermInput && name.startsWith(searchTermInput) && name !== searchTermInput;
          })
            .slice(0, 10)
            .map((item) => (<div className='search__dropdown-row' onClick={() => onSearch(item.name)} key={item.id}>
              {item.name}
            </div>))}
        </div>
      </div>
    </>
  );
}
