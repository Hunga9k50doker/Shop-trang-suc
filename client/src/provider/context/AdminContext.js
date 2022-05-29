import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import AdminReducer from "../reducer/AdminReducer";
import { API_URL, FETCH_ALL_USERS, DELETE_USER } from "./constant";
export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [adminState, dispatch] = useReducer(AdminReducer, {
    users: [],
    loading: true,
  });

  const loadAllUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/admin`);
      if (response.data.success) {
        dispatch({
          type: FETCH_ALL_USERS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: FETCH_ALL_USERS,
        payload: [],
      });
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/users/admin/${id}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_USER,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: DELETE_USER,
        payload: [],
      });
    }
  };
  useEffect(() => {
    loadAllUsers();
  }, []);
  const adminData = {
    adminState,
    deleteUser,
  };

  return (
    <AdminContext.Provider value={adminData}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
