import React, { useEffect } from 'react';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import './SearchInput.css';

export default function SearchInput() {
  const {
    searchQuery, setSearchQuery, setSelectedEmployee, filteredEmployeesList,
  } = useEmployees();

  function onChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function onSearch(searchTerm) {
    setSelectedEmployee(searchTerm);
    setSearchQuery(searchTerm);
  }

  useEffect(() => {
    setSearchQuery('');
    setSelectedEmployee(null);
  }, []);

  return (
    <>
      <div className='search'>
        <div className='search__container'>
          <input className='search__input' type='text' placeholder='Поиск по сотруднику' value={searchQuery} onChange={onChange} />
        </div>
        <div className='search__dropdown'>
          {filteredEmployeesList.filter((item) => {
            const searchTermInput = searchQuery.toLowerCase();
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
