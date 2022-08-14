export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_CART_QTY = "CHANGE_CART_QTY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case REMOVE_FROM_CART:
      let filterCart = state.cart.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        cart: filterCart
      };
    case CHANGE_CART_QTY:
      const { qty, pid } = action.payload;
      let latestCart = state.cart.map(item => item.id == pid ? { ...item, qty: Number(qty) } : item)
      return {
        ...state,
        cart: latestCart
      };
    default:
      return {
        ...state,
      };
  }
};