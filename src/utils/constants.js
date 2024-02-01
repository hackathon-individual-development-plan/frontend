const BASE_URL = '/api/v1';

const IPD_STATUS = {
  IN_PROGRESS: 'В работе',
  DONE: 'Выполнен',
  NOT_DONE: 'Не выполнен',
  EMPTY: 'Отсутствует',
};

const USER_ROLES = [
  {
    senior:
    {
      token: 'Token 8e9361528a15b9a61dc4ee1dc40d41525080d9de',
      role: 'chief',
    },
  },
  {
    employee:
    {
      token: 'Token d384e150fc0ee5abb00336f69ed509438e8e9249',
      role: 'employee',
    },
  },
];

export {
  BASE_URL,
  IPD_STATUS,
  USER_ROLES,
};
