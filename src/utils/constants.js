const BASE_URL = '/api/v1';

// в продакшане токенов быть не должно, авторизация будет из AlphaPeople
const TOKEN_KEY = 'AlfaIprProjectToken';
const TOKEN_VALUE = {
  CHIEF: 'Token 08c8b74340e79ea26fbb73a9cc398c79fd36d77c',
  EMPLOYEE: 'Token ac83a1374ee39b726829e34d49ce15138704b737',
};

const IPD_STATUS = {
  IN_PROGRESS: 'В работе',
  DONE: 'Выполнен',
  NOT_DONE: 'Не выполнен',
  CANCELED: 'Отменен',
  EMPTY: 'Отсутствует',
};

export {
  BASE_URL,
  TOKEN_KEY,
  TOKEN_VALUE,
  IPD_STATUS,
};
