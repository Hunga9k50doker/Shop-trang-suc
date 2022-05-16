import { LOAD_PRODUCTS, DELETE_PRODUCTS } from "../context/constant";

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
    // case DELETE_PRODUCTS:
    //   products = state.products.filter((product) => product._id !== payload);
    //   return {
    //     ...state,
    //     products,
    //   };

    default:
      return state;
  }
};
