import pic1 from '../images/avatar-1.jpg';
import pic2 from '../images/avatar-2.jpg';
// import pic3 from '../images/avatar-3.jpg';
// import pic4 from '../images/avatar-4.jpg';

const targetsFromDB = [
  {
    id: 1,
    title: 'Java программирование',
    deadline: '28.04.2024',
    status: 'В работе',
    description: 'Необходимо улучшить навыки и скорость программирования на языке Java, соответствующие уровню Middle.',
    tasks: [
      {
        id: 1,
        name: 'Пройти онлайн тренинг «Java Middle»',
      },
      {
        id: 2,
        name: 'Прочитать книгу «Качество кода»',
      },
    ],
    comments: [
      {
        employeeId: 250,
        employeeName: 'Артемьев Олег Игоревич',
        avatar: pic1,
        message: 'Начал проходить тренинг.',
      },
      {
        employeeId: 123,
        employeeName: 'Осипов Александр Владимирович',
        employeeAvatar: pic2,
        message: 'Удачи с тренингом.',
      },
    ],
  },
  {
    id: 2,
    title: 'JS программирование',
    deadline: '28.04.2028',
    status: 'Не выполнен',
    description: 'Необходимо улучшить навыки и скорость в JS программирование',
    tasks: [
      {
        id: 1,
        name: 'Пройти онлайн тренинг «Java Middle»',
      },
      {
        id: 2,
        name: 'Прочитать книгу «Качество кода»',
      },
    ],
    comments: [
      {
        employeeId: 250,
        employeeName: 'Артемьев Олег Игоревич',
        avatar: pic1,
        message: 'Начал проходить тренинг.',
      },
      {
        employeeId: 123,
        employeeName: 'Осипов Александр Владимирович',
        employeeAvatar: pic2,
        message: 'Удачи с тренингом.',
      },
    ],
  },
];

export default targetsFromDB;
