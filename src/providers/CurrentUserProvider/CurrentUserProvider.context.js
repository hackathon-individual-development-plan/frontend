import { createContext } from 'react';

export default createContext({
  initialize: () => Promise,
  currentUser: {},
  currentUserRole: '',
  userIpdID: '',
  isSenior: false,
  isUserPlan: false,
  token: '',
  userIpdId: '',
  setIsUserPlan: () => { },
});
