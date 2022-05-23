import { createContext, useReducer } from "react";
import axios from "axios";
import { FETCH_REVIEWS_BY_PRODUCT_ID, ADD_REVIEW, API_URL } from "./constant";
import { reviewReducer } from "../reducer/ReviewReducer";

export const ReviewContext = createContext();

const ReviewContextProvider = ({ children }) => {
  const [reviewState, dispatch] = useReducer(reviewReducer, {
    loading: true,
    reviews: [],
  });

  const loadingReviews = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/review/${id}`);
      if (response.data.success)
        dispatch({
          type: FETCH_REVIEWS_BY_PRODUCT_ID,
          payload: response.data.data,
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async (id, reviewDescription) => {
    try {
      const response = await axios.post(
        `${API_URL}/review/${id}`,
        reviewDescription
      );
      if (response.data.success)
        dispatch({
          type: ADD_REVIEW,
          payload: response.data.data,
        });
    } catch (error) {
      console.log(error);
    }
  };

  const reviewData = {
    reviewState,
    loadingReviews,
    addReview,
  };

  return (
    <ReviewContext.Provider value={reviewData}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContextProvider;
