import { createContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import { favouriteReducer } from "../reducer/FavouriteReducer";
import axios from "axios";
import { API_URL, LOAD_FAVOURITE, DELETE_FAVOURITE, ADD_FAVOURITE, LOCAL_STORAGE_TOKEN_NAME } from "./constant";
export const FavouriteContext = createContext();

const FavouriteContextProvider = ({ children }) => {
  const [favouriteState, dispatch] = useReducer(favouriteReducer, {
    loading: true,
    products: [],
  });

  const loadFavouriteProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/favourite/user`);
      if (response.data.success)
        dispatch({
          type: LOAD_FAVOURITE,
          payload: response.data.data,
        });
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) loadFavouriteProduct();
  }, []);

  const addProductToFavourite = async ({ id, product }) => {
    try {
      const response = await axios.put(`${API_URL}/favourite/user`, {
        productId: id,
      });
      if (response.data.success) {
        dispatch({
          type: ADD_FAVOURITE,
          payload: product,
        });
        toast.success("Thêm thành công, hãy kiểm tra!");
      } else {
        response.data.message === "Token not found"
          ? toast.warning("Bạn cần đăng nhập để thực hiện thao tác này!")
          : toast.warning("Thêm vào mục ưa thích thất bại!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteOneProductFromFavourite = async ({ id }) => {
    const product = { productId: id };
    try {
      const response = await axios.delete(`${API_URL}/favourite/user`, {
        data: product,
      });
      if (response.data.success) {
        dispatch({
          type: DELETE_FAVOURITE,
          payload: id,
        });
        toast.success("Xóa thành công!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const favouriteData = {
    favouriteState,
    deleteOneProductFromFavourite,
    addProductToFavourite,
  };
  return <FavouriteContext.Provider value={favouriteData}>{children}</FavouriteContext.Provider>;
};

export default FavouriteContextProvider;
