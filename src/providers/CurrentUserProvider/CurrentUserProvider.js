/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState, useEffect } from 'react';
import CurrentUserProviderContext from './CurrentUserProvider.context';
import { getUserInfo } from '../../utils/api';

const CurrentUserProvider = ({ children }) => {
  // const [userToken, setUserToken] = useState(localStorage.getItem(token));
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserRole, setCurrentUserRole] = useState('');
  const [isSenior, setIsSenior] = useState(false);

  const initialize = () => {
    getUserInfo(localStorage.getItem('AlfaIprProjectToken'))
      .then((user) => {
        setCurrentUser(user);
        setCurrentUserRole(user.role);
        setIsSenior(user?.role === 'chief');
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  };

  useEffect(() => {
    initialize();
  }, []);

  // const getUserRole = (token) => { // убраить и заменить на currentUserRole
  //   setUserToken(localStorage.getItem(token));
  //   if (userToken === USER_ROLES[0].senior.token) {
  //     setCurrentUserRole(USER_ROLES[0].senior.role);
  //     setIsSenior(true);
  //   } else if (userToken === USER_ROLES[1].employee.token) {
  //     setCurrentUserRole(USER_ROLES[1].employee.role);
  //     setIsSenior(false);
  //   }
  // };

  const value = {
    currentUser,
    currentUserRole,
    isSenior,
  };

  return <CurrentUserProviderContext.Provider value={value}>{children}</CurrentUserProviderContext.Provider>;
};

export default CurrentUserProvider;
