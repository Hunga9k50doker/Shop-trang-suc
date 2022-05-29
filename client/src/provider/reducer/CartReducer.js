import {
  LOAD_CART,
  ADD_CART,
  DELETE_CART,
  CHANGE_QUANTITY,
} from "../context/constant";

export const CartReducer = (state, action) => {
  const { type, payload } = action;
  let products, product;
  switch (type) {
    case LOAD_CART:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case ADD_CART:
      product = { ...payload.data, product: [payload.product] };
      return {
        ...state,
        products: [...state.products, product],
      };
    case DELETE_CART:
      return {
        ...state,
        products: state.products.filter((p) => p._id !== payload._id),
      };
    case CHANGE_QUANTITY:
      products = state.products.filter((p) => p._id !== payload.data._id);
      product = { ...payload.data, product: payload.product };
      return {
        ...state,
        products: [...products, product],
      };
    default:
      break;
  }
};
