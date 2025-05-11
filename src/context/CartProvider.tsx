// CartProvider component manages shopping cart state
import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {CartContext} from './CartContext';
import type {CartItem} from '../types/CartItem';
import {
  getCartFromStorage,
  saveCartToStorage,
  clearCartStorage,
} from '../utils/cartStorage';

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartFromStorage());
  }, []);

  const updateCart = (items: CartItem[]) => {
    setCartItems(items);
    saveCartToStorage(items);
  };

  const addToCart = (item: CartItem) => {
    const existing = cartItems.find((i) => i.id === item.id);
    const updated = existing
      ? cartItems.map((i) =>
          i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i
        )
      : [...cartItems, item];
    updateCart(updated);
  };

  const removeFromCart = (id: number) => {
    updateCart(cartItems.filter((i) => i.id !== id));
  };

  const changeQuantity = (id: number, quantity: number) => {
    if (!Number.isFinite(quantity) || quantity < 0) return;
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    updateCart(cartItems.map((i) => (i.id === id ? {...i, quantity} : i)));
  };

  const clearCart = () => {
    updateCart([]);
    clearCartStorage();
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, changeQuantity, clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
