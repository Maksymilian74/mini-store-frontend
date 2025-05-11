// React hook for managing the shopping cart state
import {useState, useEffect} from 'react';
import type {CartItem} from '../types/CartItem';
import {
  getCartFromStorage,
  saveCartToStorage,
  clearCartStorage,
} from '../utils/cartStorage';

export const useCart = () => {
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
    let updated;
    if (existing) {
      updated = cartItems.map((i) =>
        i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i
      );
    } else {
      updated = [...cartItems, item];
    }
    updateCart(updated);
  };

  const removeFromCart = (id: number) => {
    updateCart(cartItems.filter((i) => i.id !== id));
  };

  const changeQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }

    const updated = cartItems.map((i) => (i.id === id ? {...i, quantity} : i));
    updateCart(updated);
  };

  const clearCart = () => {
    updateCart([]);
    clearCartStorage();
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
  };
};
