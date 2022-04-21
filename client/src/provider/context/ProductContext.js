import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import { API_URL, LOAD_PRODUCTS } from "./constant";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  let [productState, dispatch] = useReducer(productReducer, {
    products: [],
    loading: true,
  });

  const loadProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);

      dispatch({
        type: LOAD_PRODUCTS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_PRODUCTS,
        payload: null,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const productsData = {
    productState,
  };

  return (
    <ProductContext.Provider value={productsData}>
      {children}
    </ProductContext.Provider>
  );
};
