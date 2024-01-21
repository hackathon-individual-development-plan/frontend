import pic1 from '../images/avatar-1.jpg';
import pic2 from '../images/avatar-2.jpg';
import pic3 from '../images/avatar-3.jpg';
import pic4 from '../images/avatar-4.jpg';

const employees = [
  {
    id: 1,
    name: 'Артемьев Олег Игоревич',
    avatar: pic1,
    position: 'Junior Java-разработчик',
    IPDName: 'От Junior к Middle',
    status: 'В работе',
  },
  {
    id: 2,
    name: 'Воронцова Ольга Николаевна',
    avatar: pic2,
    position: 'Middle Бизнес аналитик',
    IPDName: 'Переход из БА в РМ',
    status: 'Не выполнен',
  },
  {
    id: 3,
    name: 'Иванов Денис Алексеевич',
    avatar: pic3,
    position: 'Java разработчикк',
    IPDName: 'От Middle к Senior',
    status: 'Выполнен',
  },
  {
    id: 4,
    name: 'Ямолова Алёна Сергеевна',
    avatar: pic4,
    position: 'Junior дизайнер',
    IPDName: '-',
    status: 'Отсутствует',
  },
  // {
  //   id: 5,
  //   name: 'Артемьев bdfy Игоревич',
  //   avatar: pic4,
  //   position: 'Junior дизайнер',
  //   IPDName: '-',
  //   status: 'Отсутствует',
  // },
];

const seniors = [
  {
    id: 1,
    name: 'Осипов Александр Владимирович',
    avatar: pic1,
    position: 'Руководитель IT-отдела',
    IPDName: '',
    status: 'Отсутствует',
  },
];

export { employees, seniors };
