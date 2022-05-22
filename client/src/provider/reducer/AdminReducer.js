import { FETCH_ALL_USERS, DELETE_USER } from "../context/constant";
const AdminReducer = (state, action) => {
  const { type, payload } = action;
  let users;
  switch (type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case DELETE_USER:
      users = state.users.filter((user) => user._id !== payload._id);
      return {
        ...state,
        users,
      };
    default:
      return state;
  }
};

export default AdminReducer;
