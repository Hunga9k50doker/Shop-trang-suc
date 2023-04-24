import axios from "axios";
import { createContext, useReducer, useLayoutEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { toast } from "react-toastify";
import { Firebase } from "../../Firebase/firebase";
import { setAuthToken } from "../../utils/setAuthToken";
import authReducer from "../reducer/AuthReducer";
import { API_URL, LOAD_USER, UPDATE_USER, LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let [authState, dispatch] = useReducer(authReducer, {
    userAuth: null,
    isLoginAuth: false,
    user: null,
    isAuthenticated: false,
    loading: localStorage[LOCAL_STORAGE_TOKEN_NAME] ? true : false,
  });

  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    } else {
      setAuthToken(null);
    }
    try {
      const response = await axios.get(`${API_URL}/users`);

      dispatch({
        type: LOAD_USER,
        payload: response.data.data,
      });
    } catch (error) {
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
        toast.success("Đăng nhập thành công!");
        window.location.reload();
      } else {
        toast.error(`Đăng nhập thất bại: ${response.data.message}`);
      }
      await loadUser();
    } catch (error) {
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };

  const verify = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/users/verify`, { username: user.username });
      if (response.status === 200) {
        await login({
          username: user.username,
          password: user.password,
        });
      } else if (response.status === 204) {
        await register({
          name: user.name,
          username: user.username,
          password: user.password,
          repassword: user.password,
          telephone: "",
        });
      }
    } catch (error) {
      throw error;
    }
  };

  const LoginWithFirebase = async (type) => {
    const google_provider = new GoogleAuthProvider();
    const auth = getAuth(Firebase);
    switch (type) {
      case "GOOGLE_LOGIN":
        await signInWithPopup(auth, google_provider)
          .then(async (result) => {
            const user = {
              name: result.user.displayName,
              password: result.user.uid,
              repassword: result.user.uid,
              telephone: "",
              username: result.user.email,
            };
            await verify(user);
          })
          .catch((error) => {
            throw error;
          });
        break;
      default:
        break;
    }
  };

  const register = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, user);
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
        setAuthToken(response.data.token);
        await axios.post(`${API_URL}/favourite/user`);
        toast.success("Đăng ký thành công!");
      } else {
        toast.error(`Đăng ký thất bại: ${response.data.message}`);
      }
      window.location.reload();
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, userData);
      if (response.data.success) {
        dispatch({
          type: UPDATE_USER,
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    window.location.replace("/");
  };

  useLayoutEffect(() => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) loadUser();
  }, []);

  const authData = {
    authState,
    login,
    LoginWithFirebase,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};
