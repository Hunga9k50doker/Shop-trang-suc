import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { toast, ToastContainer, Bounce, Zoom } from "react-toastify";
import { Firebase } from "../../Firebase/firebase";
import { setAuthToken } from "../../utils/setAuthToken";
import { authReducer } from "../reducer/AuthReducer";
import { API_URL, LOAD_USER, LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let [authState, dispatch] = useReducer(authReducer, {
    userAuth: null,
    isLoginAuth: false,
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
      // .then((res) => console.log(res));
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
      } else {
        alert(response.data.message);
        // toast.warn("🦄 Wow so easy!", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });

        // <ToastContainer
        //   position="top-right"
        //   autoClose={5000}
        //   hideProgressBar={false}
        //   newestOnTop={false}
        //   closeOnClick
        //   rtl={false}
        //   pauseOnFocusLoss
        //   draggable
        //   pauseOnHover
        // />;

        // <ToastContainer />;
      }
      await loadUser();
    } catch (error) {
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
  };
  const LoginWithFirebase = async (type) => {
    const google_provider = new GoogleAuthProvider();
    const facebook_provider = new FacebookAuthProvider();
    const github_provider = new GithubAuthProvider();
    const auth = getAuth(Firebase);
    switch (type) {
      case "GOOGLE_LOGIN":
        await signInWithPopup(auth, google_provider)
          .then((result) => {
            console.log(result.user);
            if (result.user) {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                result.user.accessToken
              );
              authState.userAuth = result.user;
              authState.isLoginAuth = true;
            }
            loadUser();
          })
          .catch((error) => {
            dispatch({
              type: LOAD_USER,
              payload: null,
            });
          });
        break;
      case "FACEBOOK_LOGIN":
        await signInWithPopup(auth, facebook_provider)
          .then((result) => {
            if (result.user) {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                result.user.accessToken
              );
              authState.userAuth = result.user;
              authState.isLoginAuth = true;
            }
            loadUser();
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
            dispatch({
              type: LOAD_USER,
              payload: null,
            });
          });
        break;
      case "GITHUB_LOGIN":
        await signInWithPopup(auth, github_provider)
          .then((result) => {
            if (result.user) {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                result.user.accessToken
              );
              authState.userAuth = result.user;
              authState.isLoginAuth = true;
            }
            loadUser();
          })
          .catch((error) => {
            console.log(error.message);
            dispatch({
              type: LOAD_USER,
              payload: null,
            });
          });
        break;
      default:
        break;
    }
    // console.log(authState.isAuthenticated);
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
    LoginWithFirebase,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
