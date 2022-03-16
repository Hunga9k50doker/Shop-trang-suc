import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";

import Home from "./pages/Home";
import Jewels from "./pages/Jewels";
import Watches from "./pages/Watches";
import Gifts from "./pages/Gifts";
import Contact from "./pages/Contact";

import HomeAdmin from "./pages/admin/Home";
import OrderAdmin from "./pages/admin/Order";
import ProductAdmin from "./pages/admin/Product";
import CustomerAdmin from "./pages/admin/Customer";
import StatusAdmin from "./pages/admin/Status";
import SettingAdmin from "./pages/admin/Setting";

import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import MyCart from "./pages/MyCart";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            {/* trang suc */}
            <Route path="trang-suc/nhan" element={<Jewels />}></Route>
            <Route path="trang-suc/nhan-cap" element={<Jewels />}></Route>
            <Route path="trang-suc/lac" element={<Jewels />}></Route>
            <Route path="trang-suc/bong-tai" element={<Jewels />}></Route>
            <Route path="trang-suc/vong-tay" element={<Jewels />}></Route>
            <Route path="trang-suc/day-co" element={<Jewels />}></Route>
            <Route path="trang-suc/kim-cuong" element={<Jewels />}></Route>
            <Route path="trang-suc/ecz-cz" element={<Jewels />}></Route>{" "}
            <Route path="trang-suc/khong-dinh-da" element={<Jewels />}></Route>{" "}
            <Route path="trang-suc/24k" element={<Jewels />}></Route>{" "}
            <Route path="trang-suc/22k" element={<Jewels />}></Route>{" "}
            <Route path="trang-suc/18k" element={<Jewels />}></Route>
            {/* dong ho */}
            <Route path="dong-ho/gucci" element={<Watches />}></Route>
            <Route path="dong-ho/citizen" element={<Watches />}></Route>
            <Route path="dong-ho/casio" element={<Watches />}></Route>
            <Route path="dong-ho/nam" element={<Watches />}></Route>
            <Route path="dong-ho/nu" element={<Watches />}></Route>
            <Route path="dong-ho/unisex" element={<Watches />}></Route>
            <Route path="dong-ho/dong-ho" element={<Watches />}></Route>
            <Route path="dong-ho/mat-kinh" element={<Watches />}></Route>
            <Route path="dong-ho/dong-ho-cap" element={<Watches />}></Route>
            <Route path="dong-ho/phu-kien" element={<Watches />}></Route>
            {/* qua tang */}
            <Route path="qua-tang/cho-nang" element={<Gifts />}></Route>
            <Route path="qua-tang/cho-chang" element={<Gifts />}></Route>
            <Route path="qua-tang/cho-cha" element={<Gifts />}></Route>
            <Route path="qua-tang/cho-me" element={<Gifts />}></Route>
            <Route path="qua-tang/cho-be" element={<Gifts />}></Route>
            {/* lien he */}
            <Route path="lien-he/" element={<Contact />}></Route>
            {/* product detail */}
            <Route path="chi-tiet/:slug" element={<Product />}></Route>
            {/* cart */}
            <Route path="gio-hang-cua-ban/" element={<MyCart />}></Route>
            {/* wishlist */}
            <Route
              path="danh-sach-san-pham-yeu-thich/"
              element={<Wishlist />}
            ></Route>
            {/* not found */} <Route path="*" element={<NotFound />}></Route>
          </Route>
          {/* ====================admin========================== */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<HomeAdmin />}></Route>
            <Route path="/admin/don-dat-hang/" element={<OrderAdmin />}></Route>
            <Route path="/admin/san-pham/" element={<ProductAdmin />}></Route>
            <Route
              path="/admin/khach-hang/"
              element={<CustomerAdmin />}
            ></Route>
            <Route path="/admin/trang-thai/" element={<StatusAdmin />}></Route>
            <Route path="/admin/cai-dat/" element={<SettingAdmin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
