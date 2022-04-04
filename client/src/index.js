import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { SideBarFilter } from "./components/common/SideBars";

import "boxicons/css/boxicons.min.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
