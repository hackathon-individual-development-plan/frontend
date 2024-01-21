import pic1 from '../images/avatar-1.jpg';

const cardsTarget = [
  {
    target: 'Java программирование',
    description: 'Необходимо улучшить навыки и скорость программирования на языке Java, соответствующие уровню Middle.',
    tasks: [
      {
        id: 1,
        task: 'Пройти онлайн тренинг «Java Middle»',
      },
      {
        id: 2,
        task: 'Прочитать книгу «Качество кода»',
      },
    ],
    comments: [
      {
        id: 1,
        avatar: pic1,
        name: 'Артемьев Олег Игоревич',
        comment: 'Начал проходить тренинг.',
      },
    ],
  },
];

export default cardsTarget;
