import { FETCH_ALL_USERS } from "../context/constant";
const AdminReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default AdminReducer;
