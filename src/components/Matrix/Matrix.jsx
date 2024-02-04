import React from 'react';
import './Matrix.css';

export default function Matrix() {
  return (
    <section className='matrix'>
      <div className='matrix__round-1'>
        <img className='matrix__image-red' src='/images/AreaRoundRed.svg' alt='График' />
        <div className='matrix__round-2'>
          <div className='matrix__round-3'>
            <div className='matrix__round-4'>
              <div className='matrix__round-5'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className='matrix__lines'>
        <li className='matrix__line'></li>
        <li className='matrix__line'></li>
        <li className='matrix__line'></li>
        <li className='matrix__line'></li>
        <li className='matrix__line'></li>
        <li className='matrix__line'></li>
      </ul>
      <ul className='matrix__group'>
        <li className='matrix__text'>Эффективное достижение результата</li>
        <li className='matrix__text'>Ориентация на бизнес</li>
        <li className='matrix__text'>Создание эффективных команд</li>
        <li className='matrix__text'>Развитие сотрудника</li>
        <li className='matrix__text'>Проактивность</li>
        <li className='matrix__text'>Внесение стратегического вклада</li>
        <li className='matrix__text'>Эффективная межфункциональная работа</li>
        <li className='matrix__text'>Лидер перемен</li>
        <li className='matrix__text'>Устойчивость к стрессу</li>
        <li className='matrix__text'>Ориентация и качество</li>
        <li className='matrix__text'>Способность внедрять новшества</li>
        <li className='matrix__text'>Эффективное взаимодействие с руководителем</li>
      </ul>
    </section>
  );
}
