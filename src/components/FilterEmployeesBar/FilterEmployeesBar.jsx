import React from 'react';
import './FilterEmployeesBar.css';
import TabsPrimary from '../TabsPrimary/TabsPrimary.jsx';
import useEmployees from '../../providers/EmployeesProvider/EmployeesProvider.hook';
import { IPD_STATUS } from '../../utils/constants';

export default function FilterEmployeesBar() {
  const { employeesList } = useEmployees();
  // eslint-disable-next-line max-len
  const filteredList = employeesList.filter((employee) => employee.idp[0].status === IPD_STATUS.IN_PROGRESS);
  return (
    <section className='filter-bar'>
      <div className='filter-bar__container'>
        <h3 className='filter-bar__title'>Сотрудники с ИПР в работе</h3>
        <p className='filter-bar__counter'>{filteredList.length} из {employeesList.length}</p>
      </div>
      <div className='filter-bar__container'>
        <h3 className='filter-bar__title'>Статус</h3>
        <TabsPrimary />
      </div>
    </section>
  );
}
