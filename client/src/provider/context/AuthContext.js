import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { setAuthToken } from "../../utils/setAuthToken";
import { authReducer } from "../reducer/AuthReducer";
import { API_URL, LOAD_USER, LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: true,
  });

  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    } else {
      setAuthToken(null);
    }
    try {
      const response = await axios.get(`${API_URL}/users`);
      //   if (response.data.success) {
      //     dispatch({
      //       type: LOAD_USER,
      //       payload: response.data,
      //     });
      //   }
      dispatch({
        type: LOAD_USER,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };

  const login = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, user);
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
      }
      await loadUser();
    } catch (error) {
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };
  const register = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, user);
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
      }
      await loadUser();
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };

  const logout = async () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    await loadUser();
  };

  useEffect(() => {
    loadUser();
  }, []);

  const authData = {
    authState,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
