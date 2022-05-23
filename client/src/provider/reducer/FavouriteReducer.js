import {
  LOAD_FAVOURITE,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
} from "../context/constant";

export const favouriteReducer = (state, action) => {
  const { type, payload } = action;
  let products;
  switch (type) {
    case LOAD_FAVOURITE:
      products =
        payload === undefined
          ? []
          : payload.favouriteDetails.product.map((product) => {
              return {
                ...product,
                isChecked: false,
              };
            });
      return {
        ...state,
        products: products,
        loading: false,
      };
    case ADD_FAVOURITE:
      const checked = state.products.find(
        (product) => product._id === payload._id
      );
      if (!checked)
        return {
          ...state,
          products: [...state.products, payload],
        };
      else return { ...state };
    case DELETE_FAVOURITE:
      products = state.products.filter((product) => product._id !== payload);
      return {
        ...state,
        products,
      };
    default:
      break;
  }
};
