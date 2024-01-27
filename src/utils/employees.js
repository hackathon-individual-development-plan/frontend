import pic1 from '../images/avatar-1.jpg';
import pic2 from '../images/avatar-2.jpg';
import pic3 from '../images/avatar-3.jpg';
import pic4 from '../images/avatar-4.jpg';

const employeesDB = [
  {
    employee: {
      id: 1,
      fio: 'Артемьев Олег Игоревич',
      job_title: 'Junior Java-разработчик',
      photo: pic1,
    },
    idp: [
      {
        id: 1,
        title: 'От Junior к Middle',
        status: 'В работе',
      },
    ],
  },
  {
    employee: {
      id: 2,
      fio: 'Воронцова Ольга Николаевна',
      job_title: 'Middle Бизнес аналитик',
      photo: pic2,
    },
    idp: [
      {
        id: 2,
        title: 'Переход из БА в РМ',
        status: 'Не выполнен',
      },
    ],
  },
  {
    employee: {
      id: 3,
      fio: 'Иванов Денис Алексеевич',
      job_title: 'Java разработчик',
      photo: pic3,
    },
    idp: [
      {
        id: 3,
        title: 'От Middle к Senior',
        status: 'Выполнен',
      },
    ],
  },
  {
    employee: {
      id: 4,
      fio: 'Ямолова Алёна Сергеевна',
      job_title: 'Junior дизайнер',
      photo: pic4,
    },
    idp: [
      {
        id: '',
        title: '-',
        status: 'Отсутствует',
      },
    ],
  },
  // {
  //   employee: {
  //     id: 5,
  //     fio: 'Артемьев bdfy Игоревич',
  //     job_title: 'Junior дизайнер',
  //     photo: pic4,
  //   },
  //   idp: [
  //     {
  //       id: '',
  //       title: '-',
  //       status: 'Отсутствует',
  //     },
  //   ],
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

export { employeesDB, seniors };
