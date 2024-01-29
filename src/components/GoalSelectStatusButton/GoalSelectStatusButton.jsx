// import React from 'react';
// import { Select, useSelectWithApply } from '@alfalab/core-components/select';
// import { useFormContext } from 'react-hook-form';

// function PickerStatusButton() {
//   const [valueStatus, setValueStatus] = useState('');
//   const { register } = useFormContext();
//   const [serialized, setSerialized] = React.useState();
//   const [selected, setSelected] = React.useState([]);
//   const handleChange = (ddlContext) => {
//     setSelected(ddlContext.selected.key);
//   };
//   const OPTIONS = [
//     { key: '1', content: '-' },
//     { key: '2', content: 'В работе' },
//     { key: '3', content: 'Выполнен' },
//     { key: '4', content: 'Не выполнен' },
//     { key: '5', content: 'Отсутствует' },
//   ];

//   return (
//     <div style={{ width: 194 }}>
//       <Select
//       allowUnselect={false}
//       block={true}
//       size="s"
//       selected={selected}
//       {...useSelectWithApply({
//         OPTIONS,
//         selected,
//         onChange: handleChange,
//       })}/>
//     </div>
//   );
// }

// export default PickerStatusButton;

// PickerStatusButton.js

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import './GoalSelectStatusButton.css';

// const options = [
//   {
//     id: 'InProgress',
//     name: 'В работе',
//   },
//   {
//     id: 'WorkDone',
//     name: 'Выполнен',
//   },
//   {
//     id: 'NotDone',
//     name: 'Не выполнен',
//   },
//   {
//     id: 'Empty',
//     name: 'Отсутствует',
//   },
// ];

// eslint-disable-next-line no-unused-vars
function GoalSelectStatusButton({ status, cardIndex }) {
  const [statusState, setStatusState] = useState(status);
  const { register } = useFormContext();
  return (
    <div>
      <select className='dropdown-button-big'
        defaultValue={statusState}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatusState(selectedStatus);
        }}
        {...register(`goals.${cardIndex}.status`)}
      >
        <option value="В работе">В работе</option>
        <option value="Выполнен">Выполнен</option>
        <option value="Не выполнен">Не выполнен</option>
        <option value="Отсутсвует">Отсутсвует</option>
      </select>
      {/* {statusState} */}
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
