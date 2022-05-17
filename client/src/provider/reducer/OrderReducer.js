import { LOAD_ORDERS, CREATE_ORDER } from "../context/constant";
const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload,
      };
      break;

    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    default:
      break;
  }
};

export default orderReducer;
