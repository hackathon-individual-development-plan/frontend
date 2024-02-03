import { useContext } from 'react';
import EmployeesProviderContext from './EmployeesProvider.context';

const useEmployees = () => useContext(EmployeesProviderContext);

export default useEmployees;
