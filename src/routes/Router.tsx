// Defines application routes using React Router
import {Routes, Route} from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import Navbar from '../components/Navbar';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/list" element={<ProductListPage />} />
      <Route path="/nav" element={<Navbar />} />
    </Routes>
  );
}
