import { createContext, useReducer, useEffect } from "react";
import { CartReducer } from "../reducer/CartReducer";
import axios from "axios";
import {
  API_URL,
  LOAD_CART,
  DELETE_CART,
  ADD_CART,
  CHANGE_QUANTITY,
} from "./constant";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, {
    loading: true,
    products: [],
  });
  const loadCartProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/carts/user`);
      if (response.data.success) {
        dispatch({
          type: LOAD_CART,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadCartProduct();
  }, []);

  const addProductToCart = async ({ id, quantity }, product) => {
    try {
      const response = await axios.post(`${API_URL}/carts/user`, {
        productId: id,
        quantity,
      });
      if (response.data.success) {
        dispatch({
          type: ADD_CART,
          payload: { data: response.data.data, product },
        });
        toast.success("Thêm thành công!");
      } else {
        toast.error("Đã có sản phẩm trong giỏ hàng");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeQuantity = async ({ quantity, id }, product) => {
    try {
      const response = await axios.put(`${API_URL}/carts/user/quantity`, {
        cartId: id,
        quantity,
      });
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: CHANGE_QUANTITY,
          payload: { data: response.data.data, product },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteOneProductFromCart = async (productId) => {
    try {
      const response = await axios.delete(`${API_URL}/carts/user`, {
        data: {
          productId,
        },
      });
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: DELETE_CART,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const CartData = {
    cartState,
    deleteOneProductFromCart,
    addProductToCart,
    changeQuantity,
  };
  return (
    <CartContext.Provider value={CartData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
