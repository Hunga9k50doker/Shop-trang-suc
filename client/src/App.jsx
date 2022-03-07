import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/common/Header";
import Navigation from "./components/common/Navigation";
import Home from "./pages/Home";
import Jewels from "./pages/Jewels";
import Watches from "./pages/Watches";
import Gifts from "./pages/Gifts";
import Contact from "./pages/Contact";

import Product from "./pages/Product";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header />
        <Navigation /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route extract path="/" element={<Home />}></Route>
            {/* trang suc */}
            <Route path="trang-suc/" element={<Jewels />}>
              <Route path="nhan" element={<Jewels />}></Route>
              <Route path="nhan-cap" element={<Jewels />}></Route>
              <Route path="lac" element={<Jewels />}></Route>
              <Route path="bong-tai" element={<Jewels />}></Route>
              <Route path="vong-tay" element={<Jewels />}></Route>
              <Route path="day-co" element={<Jewels />}></Route>
              <Route path="kim-cuong" element={<Jewels />}></Route>
              <Route path="ecz-cz" element={<Jewels />}></Route>{" "}
              <Route path="khong-dinh-da" element={<Jewels />}></Route>{" "}
              <Route path="24k" element={<Jewels />}></Route>{" "}
              <Route path="22k" element={<Jewels />}></Route>{" "}
              <Route path="18k" element={<Jewels />}></Route>
            </Route>
            {/* dong ho */}

            <Route path="dong-ho/" element={<Watches />}>
              <Route path="gucci" element={<Watches />}></Route>
              <Route path="citizen" element={<Watches />}></Route>
              <Route path="casio" element={<Watches />}></Route>
              <Route path="nam" element={<Watches />}></Route>
              <Route path="nu" element={<Watches />}></Route>
              <Route path="unisex" element={<Watches />}></Route>
              <Route path="dong-ho" element={<Watches />}></Route>
              <Route path="mat-kinh" element={<Watches />}></Route>
              <Route path="dong-ho-cap" element={<Watches />}></Route>
              <Route path="phu-kien" element={<Watches />}></Route>
            </Route>
            {/* qua tang */}

            <Route path="qua-tang/" element={<Gifts />}>
              <Route path="cho-nang" element={<Gifts />}></Route>
              <Route path="cho-chang" element={<Gifts />}></Route>
              <Route path="cho-cha" element={<Gifts />}></Route>
              <Route path="cho-me" element={<Gifts />}></Route>
              <Route path="cho-be" element={<Gifts />}></Route>
            </Route>
            {/* lien he */}

            <Route path="lien-he/" element={<Contact />}></Route>
            {/* product detail */}

            <Route path="product" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
