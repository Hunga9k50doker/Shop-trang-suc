import { ADD_REVIEW, FETCH_REVIEWS_BY_PRODUCT_ID } from "../context/constant";

export const reviewReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REVIEWS_BY_PRODUCT_ID:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, payload],
      };
    default:
      return state;
  }
};
