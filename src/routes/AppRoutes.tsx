import { Navigate, Route, Routes } from 'react-router';
import AdminLayout from '../components/layout/AdminLayout';
import LoginPage from '../pages/login/index';
import ProductsPage from '../pages/products/index';
import UsersPage from '../pages/users/index';
import NotFoundPage from '../pages/notFound/index';
import ProtectedRoute from './ProtectedRoute';
import { RoutePath } from '../types/Enums/RoutePath';

const AppRoutes = () => (
  <Routes>
    <Route path={RoutePath.Login} element={<LoginPage />} />

    <Route element={<ProtectedRoute />}>
      <Route element={<AdminLayout />}>
        <Route path={RoutePath.Dashboard} element={<Navigate to={RoutePath.Products} replace />} />
        <Route path={RoutePath.Products} element={<ProductsPage />} />
        <Route path={RoutePath.Users} element={<UsersPage />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;