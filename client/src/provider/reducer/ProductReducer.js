import {
  LOAD_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  FETCH_ONE_PRODUCT,
} from "../context/constant";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  let products;
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      products = state.products.filter((product) => product._id !== payload);
      return {
        ...state,
        products,
      };

    case FETCH_ONE_PRODUCT:
      return {
        ...state,
        product: payload.product,
        loadingOneProduct: payload.loading,
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        product: payload,
      };

    default:
      return state;
  }
};
