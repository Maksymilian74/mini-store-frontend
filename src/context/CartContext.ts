// CartContext defines and provides a React Context
import {createContext} from 'react';
import type {CartItem} from '../types/CartItem';

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
