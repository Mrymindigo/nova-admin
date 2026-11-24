import { Navigate, Outlet } from 'react-router';
import { RoutePath } from '../types/Enums/RoutePath';

//replace with redux
const ProtectedRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.Login} replace />;
};

export default ProtectedRoute;