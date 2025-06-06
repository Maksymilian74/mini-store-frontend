// Defines application routes using React Router
import {Routes, Route, Navigate} from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import CartPage from '../pages/CartPage';
import SummaryPage from '../pages/SummaryPage';
import Layout from '../layout/Layout';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Route>
    </Routes>
  );
}
