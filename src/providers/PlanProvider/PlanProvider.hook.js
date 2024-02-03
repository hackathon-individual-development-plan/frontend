import { useContext } from 'react';
import PlanProviderContext from './PlanProvider.context';

const usePlan = () => useContext(PlanProviderContext);

export default usePlan;
