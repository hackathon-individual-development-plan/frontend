// Здесь создается компонент TargetProvider, который использует useState
// для хранения состояния targetList. Функции initialize, edit, add,
// и remove используют setTargetList для обновления состояния. Затем
// создается объект value, который содержит эти функции и targetList.
// Этот объект передается в провайдер контекста, который обертывает
// дочерние компоненты и предоставляет им доступ к значениям контекста.

import { useState, useEffect } from 'react';
import TargetProviderContext from './TargetProvider.context';
import targetsFromDB from '../../utils/targets';

const TargetProvider = ({ children }) => {
  const [targetList, setTargetList] = useState(targetsFromDB);

  const initialize = () => {
    useEffect(() => {
      setTargetList(targetsFromDB);
    }, [targetsFromDB]);
  };

  const edit = () => {
    setTargetList();
  };

  const add = () => {
    setTargetList();
  };

  const remove = () => {
    setTargetList();
  };

  const value = {
    initialize,
    edit,
    add,
    remove,
    targetList,
  };

  return <TargetProviderContext.Provider value={value}>{children}</TargetProviderContext.Provider>;
};

export default TargetProvider;
