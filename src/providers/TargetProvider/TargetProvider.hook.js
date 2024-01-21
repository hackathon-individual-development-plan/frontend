// Этот файл экспортирует кастомный хук useTarget, который использует
// useContext для получения значений из контекста TargetProviderContext.
// Таким образом, в компонентах вы сможете использовать этот хук для
// доступа к функциям и данным из вашего контекста.

import { useContext } from 'react';
import TargetProviderContext from './TargetProvider.context';

const useTargets = () => useContext(TargetProviderContext);

export default useTargets;
