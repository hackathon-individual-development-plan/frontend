import { useState, useEffect } from 'react';
import CurrentUserProviderContext from './CurrentUserProvider.context';
import { getUserInfo, getIdpInfo } from '../../utils/api';
import { TOKEN_KEY, TOKEN_VALUE } from '../../utils/constants';

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserRole, setCurrentUserRole] = useState('');
  const [isSenior, setIsSenior] = useState(false);

  const [isUserPlan, setIsUserPlan] = useState(false);
  const [userIpdId, setUserIpdId] = useState('');
  // в продакшане токенов быть не должно, авторизация будет из AlphaPeople
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || TOKEN_VALUE.CHIEF);

  const initialize = () => {
    getUserInfo(token)
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
  }, [token]);

  const getUserPlan = () => {
    getIdpInfo(token)
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
    token,
    setToken,
    getUserPlan,
  };

  return <CurrentUserProviderContext.Provider value={value}>
    {children}</CurrentUserProviderContext.Provider>;
};

export default CurrentUserProvider;
