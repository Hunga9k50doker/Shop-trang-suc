import {
  LOAD_ORDERS,
  CREATE_ORDER,
  FETCH_ONE_ORDER,
  CHANGE_STATUS_ORDER,
} from "../context/constant";
const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload,
      };

    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    case FETCH_ONE_ORDER:
      return {
        ...state,
        order: payload.order,
        loadingOrder: payload.loading,
      };
    case CHANGE_STATUS_ORDER:
      const orders = state.orders.filter((o) => o._id !== payload._id);
      return {
        ...state,
        orders: [...orders, payload],
      };
    default:
      break;
  }
};

export default orderReducer;
