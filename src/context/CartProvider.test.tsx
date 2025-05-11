// Integration tests for CartProvider, verifying core cart functionalities
import {render, screen} from '@testing-library/react';
import {describe, it, expect, beforeEach} from 'vitest';
import {CartProvider} from './CartProvider';
import {useCart} from '../hooks/useCart';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {
  const {cartItems, addToCart, removeFromCart, changeQuantity, clearCart} =
    useCart();

  return (
    <div>
      <button
        onClick={() => addToCart({id: 1, name: 'Test', price: 5, quantity: 1})}
      >
        Add
      </button>
      <button onClick={() => removeFromCart(1)}>Remove</button>
      <button onClick={() => changeQuantity(1, 3)}>Change Quantity</button>
      <button onClick={() => clearCart()}>Clear</button>
      <div data-testid="count">{cartItems.length}</div>
      <div data-testid="quantity">{cartItems[0]?.quantity || 0}</div>
    </div>
  );
};

describe('CartProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds item to cart', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText('Add'));

    expect(screen.getByTestId('count').textContent).toBe('1');
    expect(screen.getByTestId('quantity').textContent).toBe('1');
  });

  it('removes item from cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    screen.getByText('Add').click();
    screen.getByText('Remove').click();
    expect(screen.getByTestId('count').textContent).toBe('0');
  });

  it('changes item quantity', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText('Add'));
    await user.click(screen.getByText('Change Quantity'));

    expect(screen.getByTestId('quantity').textContent).toBe('3');
  });

  it('clears the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    screen.getByText('Add').click();
    screen.getByText('Clear').click();
    expect(screen.getByTestId('count').textContent).toBe('0');
  });
});
