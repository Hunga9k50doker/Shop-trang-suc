import ReactDOM from "react-dom";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import "boxicons/css/boxicons.min.css";
import "./styles/index.scss";
import { AuthContextProvider } from "./provider/context/AuthContext";
import { ProductContextProvider } from "./provider/context/ProductContext";
import FavouriteContextProvider from "./provider/context/FavouriteContext";
import CartContextProvider from "./provider/context/CartContext";
import AdminContextProvider from "./provider/context/AdminContext";
import OrderContextProvider from "./provider/context/OrderContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminContextProvider>
        <ProductContextProvider>
          <FavouriteContextProvider>
            <OrderContextProvider>
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </OrderContextProvider>
          </FavouriteContextProvider>
        </ProductContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
