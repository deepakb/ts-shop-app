import React from 'react';
import { ProductType } from '../components/product/Product.types';

enum ActionType {
  addItemToCart = 'ADD_ITEM_TO_CART'
}

interface Action {
  type: ActionType;
  payload: ProductType;
}

type Dispatch = (action: Action) => void;
type State = { cart: ProductType[] };
type CartProviderProps = { children: React.ReactNode };

const CartContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      return { cart: [...state.cart, action.payload] };
    }
    default: {
      return state;
    }
  }
};

const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(cartReducer, { cart: [] });
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = (): { state: State; dispatch: Dispatch } => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export { CartProvider, useCart, ActionType };
