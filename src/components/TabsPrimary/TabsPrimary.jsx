/* eslint-disable no-shadow */
import React from 'react';
import { Tabs, Tab } from '@alfalab/core-components/tabs';
import './TabsPrimary.css';

export default function TabsPrimary() {
  const TABS = [
    { title: 'Все', id: 'tab-1' },
    { title: 'В работе', id: 'tab-2' },
    { title: 'Выполнен', id: 'tab-3' },
    { title: 'Не выполнен', id: 'tab-4' },
    { title: 'Отсутствует', id: 'tab-5' },
  ];

  const IS_MOBILE = document.body.clientWidth < 450;

  const [selectedId, setSelectedId] = React.useState(TABS[0].id);

  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
  };

  return (
        <>
            <Tabs
                breakpoint={450}
                selectedId={selectedId}
                onChange={handleChange}
                view='secondary'
                size='xxs'
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
