import { LOAD_PRODUCTS } from "../context/constant";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: payload,   
        loading: false,
      };

    default:
      return state;
  }
};
