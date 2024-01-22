// Этот файл экспортирует кастомный хук useTarget, который использует
// useContext для получения значений из контекста TargetProviderContext.
// Таким образом, в компонентах вы сможете использовать этот хук для
// доступа к функциям и данным из вашего контекста.

import { useContext } from 'react';
import GoalProviderContext from './GoalProvider.context';

const useGoals = () => useContext(GoalProviderContext);

export default useGoals;
