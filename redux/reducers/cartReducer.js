import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QTY,
  RESET_CART_ITEM,
  UPDATE_CHECKOUT_PROGRESS,
} from "../types";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  updateCartItemQuantity,
} from "../utils/cartUtils";

const initialState = {
  checkoutProgress: 1,
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CHECKOUT_PROGRESS:
      return { ...state, checkoutProgress: payload };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case UPDATE_CART_ITEM_QTY:
      return {
        ...state,
        cartItems: updateCartItemQuantity(state.cartItems, payload),
      };
    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };
    case RESET_CART_ITEM:
      return initialState;
    default:
      return state;
  }
};
