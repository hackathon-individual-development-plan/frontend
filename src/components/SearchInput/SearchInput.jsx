import React from 'react';
import './SearchInput.css';

export default function SearchInput({
  searchQuery, onChange, array, onSearch,
}) {
  return (
        <>
            <div className='search'>
                <div className='search__container'>
                    <input className='search__input' type='text' placeholder='Поиск по сотруднику' value={searchQuery} onChange={onChange} />
                </div>
                <div className='search__dropdown'>
                    {array.filter((item) => {
                      const searchTermInput = searchQuery.toLowerCase();
                      const name = item.employee.fio.toLowerCase();
                      // eslint-disable-next-line max-len
                      return searchTermInput && name.startsWith(searchTermInput) && name !== searchTermInput;
                    })
                      .slice(0, 10)
                      .map((item) => (<div className='search__dropdown-row' onClick={() => onSearch(item.employee.fio)} key={item.employee.id}>
                            {item.employee.fio}
                        </div>))}
                </div>
            </div>
        </>
  );
}
