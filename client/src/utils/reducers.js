import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

const initialState = {
  cart: [],
  cartOpen: false,
  products: [],
  currentCategory: '',
  categories: [],
};

// reducer uses the initialState as a default value. The reducer reads current state + action
// updates the state per that action, and returns the next state.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //the reducer typically looks at the action type field to determine what happens
    // returns a copy of state with an updated products array 
    //functionality of the UPDATE_PRODUCTS case
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    // returns copy of state and maps through the items in the cart array to check if the product is already in the cart. 
    // If the product is the same as the id in the action.payload, the item quantity is incremented. 
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // runs through the cart items and confirms if the product.id & action.id are the same.
    // if so, it decrements the quantity and removes the item from the cart, and updates the state.
 
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      //checks to see if the cart's item quantity is 0- aka empty. If there are items in the cart, cartOpen status is set to true.
      //updates cart array to newState
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };


    // if reducer doesn't recognize the action type or does not care about this action, it returns the existing state 
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
