import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState(prev => ({
      ...prev,
      cart: [...prev.cart, payload]
    }));
  };

  const removeFromCart = payload => {
    setState(prev => ({
      ...prev,
      cart: prev.cart.filter(item => item.id !== payload.id)
    }));
  };

  const addToBuyer = payload => setState(prev => ({
    ...prev,
    buyer: [...prev.buyer, payload]
  }));

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state
  };

};
