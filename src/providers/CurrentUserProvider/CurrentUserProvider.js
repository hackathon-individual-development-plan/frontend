/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState } from 'react';
import CurrentUserProviderContext from './CurrentUserProvider.context';
import { USER_ROLES } from '../../utils/constants';

const CurrentUserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState('');
  const [currentUserRole, setCurrentUserRole] = useState('');
  const [isSenior, setIsSenior] = useState(false);

  const getUserRole = (jwt) => {
    setUserToken(localStorage.getItem(jwt));
    if (userToken === 'token_jwt_senior') {
      setCurrentUserRole(USER_ROLES[0].senior.role);
      setIsSenior(true);
    } else if (userToken === 'token_jwt_employee') {
      setCurrentUserRole(USER_ROLES[1].employee.role);
      setIsSenior(false);
    }
  };

  const value = {
    currentUserRole,
    userToken,
    isSenior,
    setUserToken,
    getUserRole,
  };

  return <CurrentUserProviderContext.Provider value={value}>{children}</CurrentUserProviderContext.Provider>;
};

export default CurrentUserProvider;
