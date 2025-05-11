import type {CartItem} from '../types/CartItem';

export const sumCartValue = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
