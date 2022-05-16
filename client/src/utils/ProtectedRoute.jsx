import React, { useContext } from "react";
import { AuthContext } from "../provider/context/AuthContext";

import { Outlet } from "react-router-dom";

const useAuth = () => {
  const {
    authState: { isAuthenticated, loading },
  } = useContext(AuthContext);
  if (loading) return "Loading...";
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = (props) => {
  const auth = useAuth();

  return auth ? <Outlet /> : "Hello";
};

export default ProtectedRoute;
