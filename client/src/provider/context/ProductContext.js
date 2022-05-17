import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import {
  API_URL,
  LOAD_PRODUCTS,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
  FETCH_ONE_PRODUCT,
} from "./constant";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  let [productState, dispatch] = useReducer(productReducer, {
    products: [],
    loading: true,
    product: null,
    loadingOneProduct: true,
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

  const loadProduct_Id = async (id) => {
    try {
      dispatch({
        type: FETCH_ONE_PRODUCT,
        payload: {
          product: null,
          loading: true,
        },
      });
      const response = await axios.get(`${API_URL}/products/${id}`);
      if (response.data.success) {
        dispatch({
          type: FETCH_ONE_PRODUCT,
          payload: {
            product: response.data.data,
            loading: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_ONE_PRODUCT,
        payload: {
          product: null,
          loading: false,
        },
      });
    }
  };

  const addProducts = async (product) => {
    // console.log(product);
    try {
      const response = await axios.post(`${API_URL}/products`, product);

      dispatch({
        type: ADD_PRODUCTS,
        payload: response.data.data,
      });
      await loadProducts();
    } catch (error) {
      dispatch({
        type: ADD_PRODUCTS,
        payload: null,
      });
      console.log(error.message);
    }
  };
  const updateProducts = async (id, productData) => {
    // console.log(product);
    try {
      const response = await axios.put(
        `${API_URL}/products/${id}`,
        productData
      );

      if (response.data.success) {
        dispatch({
          type: UPDATE_PRODUCTS,
          payload: response.data.data,
        });
      }
      await loadProducts();
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: null,
      });
      console.log(error.message);
    }
  };
  const deleteProducts = async (id) => {
    // console.log(product);
    try {
      const response = await axios.delete(`${API_URL}/products/${id}`);
      dispatch({
        type: DELETE_PRODUCTS,
        payload: response.data.data,
      });
      await loadProducts();
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCTS,
        payload: null,
      });
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const productsData = {
    productState,
    loadProduct_Id,
    addProducts,
    updateProducts,
    deleteProducts,
  };

  return (
    <ProductContext.Provider value={productsData}>
      {children}
    </ProductContext.Provider>
  );
};
