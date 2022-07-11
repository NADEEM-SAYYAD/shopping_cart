export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_CART_QTY = "CHANGE_CART_QTY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        state,
      };
    case REMOVE_FROM_CART:
      return {
        state,
      };
    case CHANGE_CART_QTY:
      return {
        state,
      };
    default:
      return state;
  }
};