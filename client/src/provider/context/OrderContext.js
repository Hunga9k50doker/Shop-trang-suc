import { createContext, useReducer, useEffect } from "react";
import orderReducer from "../reducer/OrderReducer";
import axios from "axios";
import {
  LOAD_ORDERS,
  API_URL,
  CREATE_ORDER,
  FETCH_ONE_ORDER,
  CHANGE_STATUS_ORDER,
} from "./constant";
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderState, dispatch] = useReducer(orderReducer, {
    loading: true,
    orders: [],
    order: null,
    loadingOrder: true,
  });
  const loadOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/invoice/user`);
      if (response.data.success) {
        dispatch({
          type: LOAD_ORDERS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LOAD_ORDERS,
        payload: [],
      });
    }
  };

  const fetchOneOrder = async (id) => {
    try {
      dispatch({
        type: FETCH_ONE_ORDER,
        payload: {
          loading: true,
        },
      });
      const response = await axios.get(`${API_URL}/invoice/user/${id}`);
      if (response.data.success) {
        dispatch({
          type: FETCH_ONE_ORDER,
          payload: { order: response.data.data, loading: false },
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_ONE_ORDER,
        payload: {
          loading: false,
          order: null,
        },
      });
    }
  };

  const changeStatusOrder = async (status, id) => {
    try {
      const response = await axios.put(`${API_URL}/invoice/user`, {
        invoiceId: id,
        status,
      });
      if (response.data.success) {
        dispatch({
          type: CHANGE_STATUS_ORDER,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const createOrder = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/invoice/user`, data);
      if (response.data.success) {
        dispatch({
          type: CREATE_ORDER,
          payload: response.data.data,
        });
        await axios.delete(`${API_URL}/carts/user/sold`);
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const orderData = {
    orderState,
    createOrder,
    fetchOneOrder,
    changeStatusOrder,
  };

  return (
    <OrderContext.Provider value={orderData}>{children}</OrderContext.Provider>
  );
};

export default OrderContextProvider;
