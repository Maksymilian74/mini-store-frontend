import {Routes, Route} from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage.tsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/list" element={<ProductListPage />} />
    </Routes>
  );
}
