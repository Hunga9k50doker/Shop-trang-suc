import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import Provider from "./provider/Provider";
import "boxicons/css/boxicons.min.css";
import "./styles/index.scss";
import { AuthContextProvider } from "./provider/context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
