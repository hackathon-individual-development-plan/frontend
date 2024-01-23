/* eslint-disable no-shadow */
import React from 'react';
import { Tabs, Tab } from '@alfalab/core-components/tabs';
import useGoals from '../../providers/GoalProvider/GoalProvider.hook';
import './TabsPrimary.css';

export default function TabsPrimary() {
  const { filterEmployees } = useGoals();

  const TABS = [
    { title: 'Все', id: 'Все' },
    { title: 'В работе', id: 'В работе' },
    { title: 'Выполнен', id: 'Выполнен' },
    { title: 'Не выполнен', id: 'Не выполнен' },
    { title: 'Отсутствует', id: 'Отсутствует' },
  ];

  const IS_MOBILE = document.body.clientWidth < 450;

  const [selectedId, setSelectedId] = React.useState(TABS[0].id);

  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
    filterEmployees(selectedId);
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
