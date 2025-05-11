// React hook for managing the shopping cart state
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
