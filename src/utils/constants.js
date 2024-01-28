const BASE_URL = '/api/v1';

const USER_ROLES = [
  {
    senior:
    {
      jwt: 'token_jwt_senior',
      role: 'senior',
    },
  },
  {
    employee:
    {
      jwt: 'token_jwt_employee',
      role: 'employee',
    },
  },
];

export {
  BASE_URL,
  USER_ROLES,
};
