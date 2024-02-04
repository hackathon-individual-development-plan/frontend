import { useState, useEffect } from 'react';
import CurrentUserProviderContext from './CurrentUserProvider.context';
import { getUserInfo, getIdpInfo } from '../../utils/api';

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserRole, setCurrentUserRole] = useState('');
  const [isSenior, setIsSenior] = useState(false);

  const [isUserPlan, setIsUserPlan] = useState(false);
  const [userIpdId, setUserIpdId] = useState('');

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

  const getUserPlan = () => {
    getIdpInfo()
      .then((data) => {
        setIsUserPlan(data.length > 0);
        if (data.length > 0) {
          setUserIpdId(data[0]?.idp[0]?.id);
        }
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  };

  const value = {
    currentUser,
    currentUserRole,
    isSenior,
    isUserPlan,
    userIpdId,
    getUserPlan,
  };

  return <CurrentUserProviderContext.Provider value={value}>
    {children}</CurrentUserProviderContext.Provider>;
};

export default CurrentUserProvider;
