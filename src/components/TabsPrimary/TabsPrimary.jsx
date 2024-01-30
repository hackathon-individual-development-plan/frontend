/* eslint-disable no-shadow */
import React from 'react';
import { Tabs, Tab } from '@alfalab/core-components/tabs';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import './TabsPrimary.css';

export default function TabsPrimary() {
  const { filterEmployees, setSearchQuery, setSelectedEmployee } = useEmployees();

  const TABS = [
    { title: 'Все', id: 'Все' },
    { title: 'В работе', id: 'In progress' },
    { title: 'Выполнен', id: 'Work done' },
    { title: 'Не выполнен', id: 'Not done' },
    { title: 'Отсутствует', id: 'Empty' },
  ];

  const IS_MOBILE = document.body.clientWidth < 450;

  const [selectedId, setSelectedId] = React.useState(TABS[0].id);

  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
    filterEmployees(selectedId);
    setSearchQuery('');
    setSelectedEmployee(null);
  };

  return (
    <>
      <Tabs
        breakpoint={450}
        selectedId={selectedId}
        onChange={handleChange}
        view='secondary'
        size='xxs'
        keepMounted={false}
        scrollable={false}
        tagShape='rounded'
        tagView='outlined'
        fullWidthScroll={IS_MOBILE}
      >
        {TABS.map((item) => (
          <Tab title={item.title} id={item.id} key={item.id} className='pull' />
        ))}
      </Tabs>
    </>
  );
}
