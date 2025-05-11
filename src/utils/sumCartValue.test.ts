// Unit tests for the sumCartValue function
import {describe, it, expect} from 'vitest';
import {sumCartValue} from './sumCartValue';
import type {CartItem} from '../types/CartItem';

describe('sumCartValue', () => {
  it('returns 0 for an empty array', () => {
    const result = sumCartValue([]);
    expect(result).toBe(0);
  });

  it('returns correct total for one item', () => {
    const items: CartItem[] = [{id: 1, name: 'Chleb', price: 3.5, quantity: 2}];
    const result = sumCartValue(items);
    expect(result).toBeCloseTo(7.0);
  });

  it('returns correct total for multiple items', () => {
    const items: CartItem[] = [
      {id: 1, name: 'Mleko', price: 2.5, quantity: 1},
      {id: 2, name: 'Jaja', price: 4.0, quantity: 2},
    ];
    const result = sumCartValue(items);
    expect(result).toBeCloseTo(10.5);
  });

  it('handles zero quantity correctly', () => {
    const items: CartItem[] = [
      {id: 1, name: 'Banany', price: 3.0, quantity: 0},
    ];
    const result = sumCartValue(items);
    expect(result).toBe(0);
  });

  it('handles decimal prices and quantities', () => {
    const items: CartItem[] = [
      {id: 1, name: 'Łosoś', price: 5.99, quantity: 3},
    ];
    const result = sumCartValue(items);
    expect(result).toBeCloseTo(17.97);
  });
});
