import pic1 from '../images/avatar-1.jpg';
// import pic2 from '../images/avatar-2.jpg';
import pic3 from '../images/avatar-3.jpg';
// import pic4 from '../images/avatar-4.jpg';

let planFromDB = {
  id: 1,
  title: 'От Junior к Middle',
  status: 'В работе',
  goals: [
    {
      id: 1,
      title: 'Java программирование',
      description:
        'Необходимо улучшить навыки и скорость программирования на языке Java, соответствующие уровню Middle.',
      tasks: [
        {
          // id: 1,
          text: 'Пройти онлайн тренинг «Java Middle» Прочитать книгу «Качество кода» Прочитать книгу «Качество кода»',
        },
        {
          // id: 2,
          text: 'Прочитать книгу «Качество кода»',
        },
      ],
      status: 'Не выполнен',
      created_at: '2019-08-24T14:15:22Z',
      deadline: '01.01.2030',
      comments: [
        {
          id: 250,
          fio: 'Артемьев Олег Игоревич',
          photo: pic1,
          message: 'Начал проходить тренинг.',
        },
        {
          id: 123,
          fio: 'Осипов Александр Владимирович',
          photo: pic3, // Use consistent property name 'avatar'
          message: 'Удачи с тренингом.',
        },
      ],
    },
    {
      id: 1,
      title: 'Лидерские качества',
      description:
        'Необходимо улучшить навыки и скорость программирования на языке Java, соответствующие уровню Middle.',
      tasks: [
        {
          // id: 1,
          text: 'Пройти онлайн тренинг «Java Middle» Прочитать книгу «Качество кода» Прочитать книгу «Качество кода»',
        },
        {
          // id: 2,
          text: 'Прочитать книгу «Качество кода»',
        },
      ],
      status: 'Отсутсвует',
      created_at: '2019-08-24T14:15:22Z',
      deadline: '01.04.2024',
      comments: [
        {
          id: 250,
          fio: 'Артемьев Олег Игоревич',
          photo: pic1,
          message: 'Начал проходить тренинг.',
        },
        {
          id: 123,
          fio: 'Осипов Александр Владимирович',
          photo: pic3, // Use consistent property name 'avatar'
          message: 'Удачи с тренингом.',
        },
      ],
    },
  ],
};
export const updatePlan = (planRecord) => new Promise((resolve) => {
  planFromDB = { ...planRecord };
  // const updatedPlan = [...planFromDB., planRecord];
  resolve(planFromDB);
});
export const createPlan = () => {};
// eslint-disable-next-line no-unused-vars
export const readPlan = (id) => new Promise((resolve) => {
  resolve(planFromDB);
});
