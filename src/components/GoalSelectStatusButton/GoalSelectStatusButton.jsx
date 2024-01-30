import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './GoalSelectStatusButton.css';

// eslint-disable-next-line no-unused-vars
function GoalSelectStatusButton({ status, cardIndex }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();
  return (
    <div>
      <select
        className="dropdown-button-big"
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register(`goals.${cardIndex}.status`)}
      >
        {/* <option value="In progress">В работе</option>
        <option value="Work done">Выполнен</option>
        <option value="Not done">Не выполнен</option>
        <option value="Empty">Отсутсвует</option> */}
        <option value="In progress">In progress</option>
        <option value="Work done">Work done</option>
        <option value="Not done">Not done</option>
        <option value="Empty">Empty</option>
      </select>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
// function DropdownButton({ cardIndex, status }) {
//   const options = {
//     'In progress': 'В работе',
//     'Work done': 'Выполнен',
//     'Not done': 'Не выполнен',
//     Empty: 'Отсутствует',
//   };
//   const [isOpen, setIsOpen] = useState(false);
//   const [valueLabelStatus, setValueLabelStatus] = useState('Отсутствует');
//   const [valueCodeStatus, setValueCodeStatus] = useState('Empty');
//   // const { register } = useFormContext();
//   useEffect(() => {
//     setValueCodeStatus(status);
//     setValueLabelStatus(options[status]);
//   }, [status]);
//   // const options = [
//   //   { key: 'In progress', label: 'В работе' },
//   //   { key: 'Work done', label: 'Выполнен' },
//   //   { key: 'Not done', label: 'Не выполнен' },
//   //   { key: 'Empty', label: 'Отсутствует' },
//   // ];

//   function onClick() {
//     setIsOpen(!isOpen);
//   }

//   // function onChange(evt) {
//   //   setValueCodeStatus(evt.target.value);
//   // }

//   // eslint-disable-next-line no-unused-vars
//   function onClickItem(code, label) {
//     setValueCodeStatus(code);
//     setValueLabelStatus(label);
//     setIsOpen(false);
//   }

//   return (
//     <div className="dropdown-button-container">
//       <input
//       type='hidden'
//       // defaultValue={valueCodeStatus}
//       value={valueCodeStatus}
//       // {...register(`goals.${cardIndex}.status2`)}
//       />
//       <input
//       placeholder="–"
//         // value={valueStatus}
//         onClick={onClick}
//         // onChange={valueLabelStatus}
//         // defaultValue={valueLabelStatus}
//       value={valueLabelStatus}
//       className={'dropdown-button'}
//         // {...register(`goals.${cardIndex}.status`, {
//         //   required: {
//         //     value: false,
//         //   },
//         // })}
//       />
//       <ul className={`dropdown-button__list ${isOpen ? 'active' : ''}`}>
//         <li className="dropdown-button__item dropdown-button__item_blue"
// onClick={() => onClickItem('In progress', options['In progress'])}>
//           {options['In progress']}
//         </li>
//         <li className="dropdown-button__item dropdown-button__item_green"
// onClick={() => onClickItem('Work done', options['Work done'])}>
//           {options['Work done']}
//         </li>
//         <li className="dropdown-button__item dropdown-button__item_red"
// onClick={() => onClickItem('Not done', options['Not done'])}>
//           {options['Not done']}
//         </li>
//         <li className="dropdown-button__item dropdown-button__item_grey"
// onClick={() => onClickItem('Empty', options.Empty)}>
//           {options.Empty}
//         </li>
//       </ul>
//     </div>
//   );
// }

export default GoalSelectStatusButton;
