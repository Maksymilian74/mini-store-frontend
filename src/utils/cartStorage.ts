// Functions for storing and retrieving cart data from localStorage
import type {CartItem} from '../types/CartItem';

const CART_KEY = 'cart';

export const getCartFromStorage = (): CartItem[] => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveCartToStorage = (items: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const clearCartStorage = () => {
  localStorage.removeItem(CART_KEY);
};
