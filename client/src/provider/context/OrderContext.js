import { createContext, useReducer, useEffect } from "react";
import orderReducer from "../reducer/OrderReducer";
import axios from "axios";
import { LOAD_ORDERS, API_URL, CREATE_ORDER } from "./constant";
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderState, dispatch] = useReducer(orderReducer, {
    loading: true,
    orders: [],
  });
  const loadOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/invoice`);
      if (response.data.success) {
        dispatch({
          type: LOAD_ORDERS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: LOAD_ORDERS,
        payload: [],
      });
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
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const orderData = {
    orderState,
    createOrder
  };

  return (
    <OrderContext.Provider value={orderData}>{children}</OrderContext.Provider>
  );
};

export default OrderContextProvider;
