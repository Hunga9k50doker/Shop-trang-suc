import { LOAD_USER, UPDATE_USER } from "../context/constant";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: payload ? true : false,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
