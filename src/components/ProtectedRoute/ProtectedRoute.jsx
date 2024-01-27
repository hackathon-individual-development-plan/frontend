import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => (!props.isSenior ? <Component {...props} /> : <Navigate to="/my-idp" replace />);

export default ProtectedRoute;
