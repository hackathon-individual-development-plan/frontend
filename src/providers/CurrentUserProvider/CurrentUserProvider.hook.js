import { useContext } from 'react';
import CurrentUserProviderContext from './CurrentUserProvider.context';

const useCurrentUser = () => useContext(CurrentUserProviderContext);

export default useCurrentUser;
